import { Mongo } from 'meteor/mongo';
import { all_subjects } from './all_subjects.js';

export const UsersSubjects = new Mongo.Collection('users_subjects');

const Subjects = new Mongo.Collection('subjects');

const quant_tmp = Subjects.find().count();

let i = quant_tmp;

while (i < all_subjects[0].length) {
    Subjects.insert({
        [i]: [ all_subjects[0][i], all_subjects[1][i] ]
    });

    UsersSubjects.update({}, {$addToSet: {[i]: 0}});

    i++;
}

export const quant = Subjects.find().count();
