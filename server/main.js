import { Meteor } from 'meteor/meteor';
import { UsersSubjects, quant } from '../imports/api/subjects/subjects.js';

Meteor.startup(() => {
    Accounts.onCreateUser(function(options, user) {

        UsersSubjects.insert({
            userId: user._id
        });

        let i = 0;

        console.log(i);
        console.log(quant);

        for (i; i < quant; i++){
            UsersSubjects.update({ userId: user._id }, {$addToSet: {[i]: 0}});
        }

        return user;
    });
});
