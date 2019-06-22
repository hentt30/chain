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
    };

    formatTime(time) {
        return moment(time).format('h:mm A');
    }

    render() {
        if(Meteor.userId() === this.props.message.senderId){
            return (
                <main>
                <WrapperMessage>
                    <font size="1" color="#A9A9A9">{this.formatTime(this.props.message.time)} </font>
                    <p>{this.props.message.message}</p>
                </WrapperMessage>
                  <Divider/>
                </main>
            );
        }
        else {
            return (
                <main>
                <WrapperMessage>
                    <p>{this.props.message.message}</p>
                    <font size="1" color="#A9A9A9">{this.formatTime(this.props.message.time)} </font>
                </WrapperMessage>
                   <Divider/>
                </main>
            );
        }
    }
}
