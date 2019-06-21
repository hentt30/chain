import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top:2px;
    border-bottom:0.5px;
    border-bottom-style: solid
    border-bottom-color :rgba(0,0,0,0.12) ;
`;


export default class Item extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    startChatWithUser(myId, friendId) {
        console.log(friendId);

        Meteor.call('directMessageRoom', myId, friendId, (error, response) => {
            console.log('M - ChatRoomMethods.getDirectMessageRoom / callback');

            if(error) {
                console.log(error.reason);
            } else {
                console.log(response.chatRoomId);
                let location = this.props.history.location.pathname;

                if( location === '/chat' ){
                    this.props.history.push(`${this.props.history.location.pathname + '/' + response.chatRoomId }`);
                }
                else {
                    this.props.history.push(`${ response.chatRoomId }`);
                }
            }
        });
    }

    render(){
        const { _id, username } = this.props.user;
        return(
            
            <Wrapper>
                <ListItem button onClick={this.startChatWithUser.bind(this, Meteor.userId(), _id)}>
                    <ListItemText>{username} </ListItemText>

                </ListItem>
        
            </Wrapper>
            
            
            
            
            );
    }
}