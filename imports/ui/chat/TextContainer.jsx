import React from 'react';
import { Meteor } from 'meteor/meteor';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const MessageListBox = styled.div`
`;

const TextBox = styled.div`
    display: flex;
    justify-content: center; 
    width: 100%;
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
                    <TextField variant="outlined" placeholder="Enter message..." value={this.state.value} onKeyPress={this.enterPress} onChange={this.handleChangeMessage}/>
                    <Button onClick={this.handleMessage} variant="contained">
                        Enviar
                    </Button>
                </TextBox>
            </MessageListBox>
        );
    }
}