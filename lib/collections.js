import { Mongo } from 'meteor/mongo'
import { Meteor } from 'meteor/meteor';

export const Contacts = new Mongo.Collection('contacts', {
    id: {
        type: String,
    },
});

export const Messages = new Mongo.Collection('messages', {
    id_sender: {
        type: String,
    },
    id_receiver: {
        type: String,
    },
    id_message: {
        type: String,
    },
    message: {
        type: String,
    },
    time: {
        type: String,
    },

});

export const Profiles = new Mongo.Collection('profiles', {
    userId: {
        type: String,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    }
});
