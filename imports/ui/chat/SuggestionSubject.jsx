import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export class SuggestionSubject extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            mixins: [ReactMeteorData],
            subject: undefined,
        };
    }

    renderSubject = () => {
        let suggestionSubject;
        let chatRoomId = this.props.match.params.chatRoomId;

        Meteor.call('subjectMatch', chatRoomId, (error, result) => {
            if (!error) {
                this.setState({subject: result});
            }
        });

        if(this.state.subject !== undefined) {
            suggestionSubject = (
                <p> Converse sobre {this.state.subject[0]} ou {this.state.subject[1]} </p>
            );
        } else {
            suggestionSubject = (
                <p> Please wait...</p>
            )
        }
        return suggestionSubject;
    };

    render() {
        return (
            <main>

                <p>{this.renderSubject()}</p>

            </main>
        );
    }
}
