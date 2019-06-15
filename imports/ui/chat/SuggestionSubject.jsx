import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export class SuggestionSubject extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            mixins: [ReactMeteorData],
            subject: undefined,
            chatRoomId: undefined,
            suggestionSubject: 'Please Wait...',
        };
    }

    renderSubject = () => {
        let suggestionSubject = 'Please Wait...';
        let chatRoomId = this.props.match.params.chatRoomId;
        Tracker.autorun(() => {
            Meteor.subscribe('findMessage', chatRoomId);
        });
        if (this.state.suggestionSubject === suggestionSubject || this.state.chatRoomId !== chatRoomId) {
            Meteor.call('subjectMatch', chatRoomId, (error, result) => {
                if (!error) {
                    this.setState({subject: result, chatRoomId: chatRoomId});
                }
            });
        }

        if(this.state.subject !== undefined) {
            suggestionSubject = (
                <p> Converse sobre {this.state.subject[0]} ou {this.state.subject[1]} </p>
            );
        } else {
            suggestionSubject = (
                <p> Please wait...</p>
            )
        }
        this.state.suggestionSubject = suggestionSubject;
    };

    render() {
        return (
            <main>

                {this.renderSubject()}

                {this.state.suggestionSubject}

            </main>
        );
    }
}
