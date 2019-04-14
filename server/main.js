import { Meteor } from 'meteor/meteor';
import { UsersSubjects, quant } from '../imports/api/subjects/subjects.js';

Meteor.startup(() => {
    Accounts.onCreateUser(function(options, user) {

        UsersSubjects.insert({
            userId: user._id
        });

        for (i = 0; i < quant; i++){
            UsersSubjects.update({ userId: user.id }, {$addToSet: {[i]: 0}});
        }

        return user;
    });
});
