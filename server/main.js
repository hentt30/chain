import {Meteor} from 'meteor/meteor';

import {quant, UsersSubjects} from '../imports/api/subjects/subjects.js';
import {Profiles} from '../lib/collections.js';
import {Messages} from '../lib/collections.js';
import {ChatRoomMembers} from '../lib/collections.js';
import {Accounts} from 'meteor/accounts-base';

Meteor.startup(() => {
  Accounts.onCreateUser((options, user) => {
    UsersSubjects.insert({
      userId: user._id
    });
    let i = 0;
    for (i; i < quant; i++){
      UsersSubjects.update({ userId: user._id }, {$addToSet: {[i]: 0}});
    }

    return user;
  });

  Meteor.methods({
    'insertUser': newUserData => Accounts.createUser(newUserData),
    'insertProfile': newUserData => {
      Profiles.insert({
        userId: Meteor.userId(),
        firstName: newUserData.firstName,
        lastName: newUserData.lastName
      });
    },
    'insertUserSubject': (SubjectData, i) => {
      UsersSubjects.update({userId: Meteor.userId()}, {$set: {[i]: [SubjectData]}});
    },
    'usersAll': () => Meteor.users.find({_id: {$ne: Meteor.userId()}}, {sort: {createdAt: -1}}).fetch(),
    'directMessageRoom': (myId, friendId) => {
      let chatRoomId = myId + friendId > friendId + myId ? myId + friendId : friendId + myId;

      let response = {
        success: false,
        message: 'There was some sever error.',
        data: {
          chatRoomId: ''
        }
      };

      if(friendId !== '') {
        // Check if both user have already started chatting (chat room exists) or chatting for first time (create new chat room)
        // Chat room exists check
        const chatRoomMember = ChatRoomMembers.findOne({ chatRoomId: chatRoomId, userId: friendId });

        if(!chatRoomMember) {
          // Chat room does not exists, create a new chat room
          ChatRoomMembers.insert({chatRoomId: chatRoomId, userId: Meteor.userId()});
          ChatRoomMembers.insert({chatRoomId: chatRoomId, userId: friendId});

          response.success = true;
          response.message = 'Chat room available.';
          response.data.chatRoomId = chatRoomId;
        }
      }

      return {
        chatRoomId: chatRoomId,
      };
    },
    'addMessage': (text) => {
      let message = {
        time: new Date(),
        text: text
      };
      Messages.insert(message);
    },
    'findMessage': () => {
      return Messages.find({}).fetch();
    }
  });
});