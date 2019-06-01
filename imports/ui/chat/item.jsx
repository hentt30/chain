import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import styled from 'styled-components';

const GoToLeft = styled.div`

    display: flex;
    flex-flow: row;
    justify-content: flex-start;
    align-items:center;
    padding:100px;
    margin-right:auto;
`;

const Logo = styled.img`

    width:28px;
    height:28px;
    border-radius: 25px;
`;

const Holder2 = styled.div`
    width: 1%;
    display: flex;
    flex-flow: column;
    align-items:center;
    justify-conent: flex-end;
`;

const Name = styled.button`
    margin-bottom: 15px;
    font-size:16px;
    margin-left: 5px;
    color:#0360ad;
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
                console.log(error);
            } else {
                console.log(response.chatRoomId);
                let location = this.props.history.location.pathname;
                console.log(location === '/chat');
                if( location === '/chat' ){
                    this.props.history.replace(`${this.props.history.location.pathname + '/' + response.chatRoomId }`);
                }
                else {
                    this.props.history.replace(`${ response.chatRoomId }`);
                }
            }
        });
    }

    render(){
        const { _id, username } = this.props.user;
        return(
            <Holder2>
                <Name onClick={this.startChatWithUser.bind(this, Meteor.userId(), _id)}> { username } </Name>
            </Holder2>
            );
    }
}