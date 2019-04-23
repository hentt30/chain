import { Meteor } from 'meteor/meteor';

import Links from '/imports/api/links';
import { UsersSubjects, quant } from '../imports/api/subjects/subjects.js';


function insertLink(title, url) {
  Links.insert({ title, url, createdAt: new Date() });
}

Meteor.startup(() => {
  // If the Links collection is empty, add some data.
  if (Links.find().count() === 0) {
    insertLink(
      'Do the Tutorial',
      'https://www.meteor.com/tutorials/react/creating-an-app'
    );

    insertLink(
      'Follow the Guide',
      'http://guide.meteor.com'
    );

    insertLink(
      'Read the Docs',
      'https://docs.meteor.com'
    );

    insertLink(
      'Discussions',
      'https://forums.meteor.com'
    );
  }

  /*Accounts.onCreateUser(function(options, user) {

    UsersSubjects.insert({
      userId: user._id
    });

    let i = 0;

    for (i; i < quant; i++){
      UsersSubjects.update({ userId: user._id }, {$addToSet: {[i]: 0}});
    }

    return user;
  });*/
});
