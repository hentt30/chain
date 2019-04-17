import { Mongo } from 'meteor/mongo';
import { allSubjects } from './allSubjects.js';

export const UsersSubjects = new Mongo.Collection('users_subjects');

const Subjects = new Mongo.Collection('subjects');

const quant_tmp = Subjects.find().count();

let i = quant_tmp;

while (i < allSubjects[0].length) {
    Subjects.insert({
        [i]: [ allSubjects[0][i], allSubjects[1][i] ]
    });

    UsersSubjects.update({}, {$addToSet: {[i]: 0}});

    i++;
}

export const quant = Subjects.find().count();
