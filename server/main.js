import { Meteor } from 'meteor/meteor';

import { UsersSubjects, quant } from '../imports/api/subjects/subjects.js';
import { Contacts, Messages, Profiles } from '../lib/collections.js'

Meteor.startup(() => {
  Accounts.onCreateUser(function(options, user) {
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
    'insertUser': function (newUserData) {
      return Accounts.createUser(newUserData);
    },
    'insertProfile': function (newUserData) {
      Profiles.insert({
        userId: Meteor.userId(),
        firstName: newUserData.firstName,
        lastName: newUserData.lastName
      });
    },
    'insertUserSubject': function (SubjectData, i) {
      let count;
      for (count = 0; count < quant; count++){
        UsersSubjects.update({ userId: Meteor.userId() }, {$addToSet: {[count]: 0}});
      }
      UsersSubjects.update({userId: Meteor.userId()}, {$set: {[i]: [SubjectData]}});
    }
  });
});
