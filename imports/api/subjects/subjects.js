import { Mongo } from 'meteor/mongo';
import { allSubjects } from './allSubjects.js';
import { UsersSubjects } from '../../../lib/collections';

const Subjects = new Mongo.Collection('subjects');

const quant_tmp = Subjects.find().count();

let i = quant_tmp;

while (i < allSubjects.length) {
    Subjects.insert({
        [i]: [ allSubjects[i] ]
    });

    UsersSubjects.update({}, {$addToSet: {[i]: [parseFloat(0), false]}});

    i++;
}

export const quant = Subjects.find().count();
export const subjects = Subjects.find({}).fetch();