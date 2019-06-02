import {Meteor} from 'meteor/meteor';

import {quant, UsersSubjects} from '../imports/api/subjects/subjects.js';
import {Profiles} from '../lib/collections.js';
import {Messages} from '../lib/collections.js';
import {ChatRoomMembers} from '../lib/collections.js';
import {Accounts} from 'meteor/accounts-base';

const idMembers = (chatRoomId) => {
  const chatRoomMember = ChatRoomMembers.find({ chatRoomId: chatRoomId }).map(u => u.userId);
  let myId = Meteor.userId();
  let friendId = '';

  if(myId === chatRoomMember[0]){
    friendId = chatRoomMember[1];
  } else {
    friendId = chatRoomMember[0];
  }

  return [myId, friendId]
};

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

    'addMessage': (text, chatRoomId) => {
      let [myId, friendId] = idMembers(chatRoomId);

      let message = {
        chatRoomId: chatRoomId,
        senderId: myId,
        receiverId: friendId,
        message: text,
        time: new Date(),
      };
      Messages.insert(message);
    },

    'findMessage': (chatRoomId) => {
      let myId = Meteor.userId();
      const myUser = Meteor.users.find({ _id: myId }).map(u => u.username)[0];

      return {
        data: Messages.find({chatRoomId: chatRoomId}).fetch(),
        myUser: myUser,
      };
    },

    'subjectMatch': (chatRoomId) => {
      let [myId, friendId] = idMembers(chatRoomId);

      return 'sucesso';
    }
  });
});