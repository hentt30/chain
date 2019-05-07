import { Meteor } from 'meteor/meteor';

import { UsersSubjects, quant } from '../imports/api/subjects/subjects.js';
import { Contacts, Messages, Profiles } from '../lib/collections.js'
import { Accounts } from 'meteor/accounts-base';

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
      UsersSubjects.update({userId: Meteor.userId()}, {$set: {[i]: [SubjectData]}});
    }
  });
});
