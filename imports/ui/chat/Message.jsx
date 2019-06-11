import { Meteor } from 'meteor/meteor';
import React from 'react';
import moment from 'moment';
import styled from "styled-components";
import Divider from '@material-ui/core/Divider';

const WrapperMessage = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export class Message extends React.Component{
    propTypes: {
        message: React.PropTypes.object.isRequired,
        myUser: React.PropTypes.string.isRequired,
    };

    formatTime(time) {
        return moment(time).format('h:mm A');
    }

    render() {
        if(Meteor.userId() === this.props.message.senderId){
            return (
                <main>
                <WrapperMessage>
                    <font size="1">{this.formatTime(this.props.message.time)} </font>
                    <p>{this.props.message.message} :{Meteor.users.find({ _id: this.props.message.senderId }).map(u => u.username)[0]}</p>
                </WrapperMessage>
                  <Divider/>
                </main>
            );
        }
        else {
            return (
                <main>
                <WrapperMessage>
                    <p>{Meteor.users.find({ _id: this.props.message.senderId }).map(u => u.username)[0]}: {this.props.message.message}</p>
                    <font size="1">{this.formatTime(this.props.message.time)} </font>
                </WrapperMessage>
                   <Divider/>
                </main>
            );
        }
    }
}
