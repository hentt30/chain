import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Message } from './Message';
import { Mongo } from 'meteor/mongo';

export class MessageList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            mixins: [ReactMeteorData],
            text: '',
            messages: undefined,
        };
    }

    renderMessages = () => {
        let messagesList;
        let chatRoomId = this.props.match.params.chatRoomId;

        Meteor.call('findMessage', chatRoomId, (error, result) => {
            if (!error) {
                this.setState({messages: result.data, myUser: result.myUser});
            }
        });

        if(this.state.messages !== undefined) {
            messagesList = (
                this.state.messages.map((message) => (
                    <Message key={message._id} message={message} myUser={this.state.myUser}/>
                ))
            );
        } else {
            messagesList = (
                <p> Please wait...</p>
            )
        }
        return messagesList;
    };

    handleChangeMessage = event => {
        this.state.text = event.target.value;
    };

    handleMessage = () => {
        let chatRoomId = this.props.match.params.chatRoomId;

        Meteor.call('addMessage', this.state.text, chatRoomId);
        this.state.text = '';
    };

    enterPress = event => {
        let code = event.key;
        if(code === 'Enter'){
            this.handleMessage();
        }
    };

    render() {
        return (
            <div className="container">
                <header>
                    <h2>Messages</h2>
                </header>

                <input placeholder="Enter message..." value={this.state.text} onKeyPress={this.enterPress} onChange={this.handleChangeMessage}/>
                <button onClick={this.handleMessage}>Enter</button>

                {this.renderMessages()}
            </div>
        );
    }
}
