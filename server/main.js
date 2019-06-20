import {Meteor} from 'meteor/meteor';

import {quant, UsersSubjects, subjects} from '../imports/api/subjects/subjects.js';
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
    'insertUser': newUserData => {
      Accounts.createUser(newUserData);
    },

    'insertProfile': newUserData => {
      Profiles.insert({
        userId: Meteor.userId(),
        firstName: newUserData.firstName,
        lastName: newUserData.lastName
      });
    },

    'insertUserSubject': (SubjectData, i) => {
      let mySubjects = [];
      if(quant > i && i >= 0){
        mySubjects[i] = UsersSubjects.find({ userId: Meteor.userId() }).map(u => u[i][0]);
        mySubjects[i] = parseFloat(mySubjects[i]) + parseFloat(SubjectData);
        UsersSubjects.update({userId: Meteor.userId()}, {$set: {[i]: [mySubjects[i]]}});
      }
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
      let subjectMatch = [], mySubjects = [], friendSubjects = [];

      for(i = 0; i < quant; i++) {
        mySubjects[i] = UsersSubjects.find({ userId: myId }).map(u => u[i][0]);
        friendSubjects[i] = UsersSubjects.find({ userId: friendId }).map(u => u[i][0]);
        subjectMatch[i] = [i , parseFloat(mySubjects[i]) + parseFloat(friendSubjects[i]) - 0.75*Math.abs(parseFloat(mySubjects[i])-parseFloat(friendSubjects[i]))];
      }

      subjectMatch.sort((a, b) => {
        return a[1]<b[1] ? 1 : -1;
      });

      let s = [subjectMatch[0][0], subjectMatch[1][0], subjectMatch[2][0]];
      return [subjects[s[0]][s[0]][0], subjects[s[1]][s[1]][0], subjects[s[2]][s[2]][0]];
    }
  });
});

Meteor.publish('pubMessage', () => {
  return Messages.find({});
});
