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
                <p> {this.state.subject} </p>
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
            <div className="container">
                <header>
                    <h2>Subject</h2>
                </header>

                {this.renderSubject()}

            </div>
        );
    }
}
