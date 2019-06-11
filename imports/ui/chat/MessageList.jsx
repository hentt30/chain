import React from 'react';
import { Meteor } from 'meteor/meteor';
import TextField from '@material-ui/core/TextField';
import { Message } from './Message';
import { Mongo } from 'meteor/mongo';
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const MessageListBox = styled.div`
`;

const MessageBox = styled.div`
    height: 576px;
    width: 512px;
    overflow-y: scroll;
    text-align:left;
    margin:0 auto;
    margin-bottom:25px;
    padding:10px;
    word-break: break-word;
`;

const TextBox = styled.div`
    display: flex;
    justify-content: center; 
`;

export class MessageList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            mixins: [ReactMeteorData],
            text: '',
            messages: undefined,
            result: 0,
        };
    }

    componentDidUpdate = () => {
        this.state.result = 0;
    };

    scrollDown = () => {
        let messageDiv = document.getElementById("message_box");
        if(this.state.result < 3 && messageDiv !== null){
            messageDiv.scrollTop = 2*messageDiv.scrollHeight;
            this.state.result += 1;
        }
    };

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
        this.state.result = 0;
    };

    enterPress = event => {
        let code = event.key;
        if(code === 'Enter'){
            this.handleMessage();
        }
    };

    render() {
        const classes = {
            button: {
                margin: '8px',
                marginLeft: '8px',
            },
        };

        return (
            <MessageListBox>
                <MessageBox id="message_box">
                    {this.renderMessages()}
                </MessageBox>

                {this.scrollDown()}

                <TextBox>
                    <TextField variant="outlined" placeholder="Enter message..." value={this.state.text} onKeyPress={this.enterPress} onChange={this.handleChangeMessage}/>
                    <Button onClick={this.handleMessage} variant="contained" className={classes.button}>
                        Enviar
                    </Button>
                </TextBox>
            </MessageListBox>
        );
    }
}
