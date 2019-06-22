import React from 'react';
import { Meteor } from 'meteor/meteor';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import {SuggestionSubject} from "./SuggestionSubject";

const MessageListBox = styled.div`
    height: 7%;
    display: flex;
    align-items: center;
    justify-content: space-around; 
`;

const TextBox = styled.div`
    display: flex;
    justify-content: center; 
    width: 70%;
    margin-top: 0px;
    margin-bottom: 10px;
`;

export class TextContainer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            mixins: [ReactMeteorData],
            value: '',
        };
    };

    handleChangeMessage = event => {
        this.setState({value: event.target.value});
    };

    handleMessage = () => {
        let chatRoomId = this.props.match.params.chatRoomId;
        Meteor.call('addMessage', this.state.value, chatRoomId);
        this.setState({value: ''})
    };

    enterPress = event => {
        let code = event.key;
        if(code === 'Enter'){
            this.handleMessage();
        }
    };

    render() {
        return (
            <MessageListBox>
                <TextBox>
                    <TextField fullWidth style={{margin: 8}} variant="outlined" placeholder="Enter message..." value={this.state.value} onKeyPress={this.enterPress} onChange={this.handleChangeMessage}/>
                    <Button onClick={this.handleMessage} style={{margin: 8}} size="small" variant="contained" color="primary">
                        Enviar
                    </Button>
                </TextBox>
                <SuggestionSubject {...this.props}/>
            </MessageListBox>
        );
    }
}