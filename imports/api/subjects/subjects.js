import { Mongo } from 'meteor/mongo';
import { allSubjects } from './allSubjects.js';

export const UsersSubjects = new Mongo.Collection('users_subjects');

const Subjects = new Mongo.Collection('subjects');

const quant_tmp = Subjects.find().count();

let i = quant_tmp;

while (i < allSubjects.length) {
    Subjects.insert({
        [i]: [ allSubjects[i] ]
    });

    UsersSubjects.update({}, {$addToSet: {[i]: [parseFloat(0)]}});

    i++;
}

export const quant = Subjects.find().count();
export const subjects = Subjects.find({}).fetch();