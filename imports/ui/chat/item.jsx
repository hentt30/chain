import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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
            <ListItem button onClick={this.startChatWithUser.bind(this, Meteor.userId(), _id)}>
                <ListItemText> { username } </ListItemText>
            </ListItem>
            );
    }
}