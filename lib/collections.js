import { Mongo } from 'meteor/mongo'
import { Meteor } from 'meteor/meteor';

export const UsersSubjects = new Mongo.Collection('users_subjects');

export const Contacts = new Mongo.Collection('contacts', {
    id: {
        type: String,
    },
});

export const Messages = new Mongo.Collection('messages', {
    chatRoomId: {
        type: String,
    },
    senderId: {
        type: String,
    },
    receiverId: {
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

//export const Messages = new Mongo.Collection("messages", {});

//Chat Room Members Collection
export const ChatRoomMembers = new Mongo.Collection('chat_room_members', {
    // _id auto generated

    //Chat room id
    chatRoomId: {
        type: String,
    },

    //Chat room member user id
    userId: {
        type: String,
    },

    // Chat room member created at date time
    createdAt: {
        type: Date,
        autoValue: function() {
            if (this.isInsert) {
                return new Date();
            } else if (this.isUpsert) {
                return {$setOnInsert: new Date()};
            } else {
                this.unset();
            }
        }
    },

    // Chat room member updated at date time
    updatedAt: {
        type: Date,
        autoValue: function() {
            if (this.isUpdate) {
                return new Date();
            }
        },
        denyInsert: true,
        optional: true
    }
});