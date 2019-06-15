import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Message } from './Message';
import { Messages} from "../../../lib/collections";
import { Mongo } from 'meteor/mongo';
import styled from "styled-components";

const MessagesBox = styled.div`
    height: 576px;
    width: 512px;
    overflow-y: scroll;
    text-align:left;
    margin:0 auto;
    margin-bottom:25px;
    padding:10px;
    word-break: break-word;
`;

export class MessageList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            mixins: [ReactMeteorData],
            messagesList: 'Please Wait...',
            numMessages: 0,
            chatRoomId: undefined,
        };
    };

    updateMessages = (messages) => {
        let messagesList;
        messagesList = (
            messages.map((message) => (
                <Message key={message._id} message={message} myUser={this.state.myUser}/>
            ))
        );

        this.setState(() => ({
            messagesList: messagesList,
        }));

        this.scrollDown();
    };


    test = () => {
        const chatRoomId = this.props.match.params.chatRoomId;
        const messages = Messages.find({chatRoomId: chatRoomId});
        const numMessages = messages.count();

        if(numMessages > this.state.numMessages || chatRoomId !== this.state.chatRoomId) {
            this.setState(() => ({
                numMessages: numMessages,
                chatRoomId: chatRoomId,
            }));
            this.updateMessages(messages);
        }
    };

    componentDidMount = () => {
        this.interval = setInterval(() => this.test(), 150);
    };

    componentWillMount = () => {
        clearInterval(this.interval);
    };

    componentDidUpdate = () => {
        this.interval = setTimeout(() => this.test(), 150);
    };

    scrollDown = () => {
        let messageDiv = document.getElementById("message_box");
        if(messageDiv !== null){
            messageDiv.scrollTop = 2*messageDiv.scrollHeight;
        }
    };

    render() {

        return (
            <main>
                <MessagesBox id="message_box">
                    {this.state.messagesList}
                </MessagesBox>
            </main>
        );
    }
}