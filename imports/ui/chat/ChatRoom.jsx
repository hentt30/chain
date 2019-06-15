import React, { Component } from 'react';
import styled from 'styled-components';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import {MessageList} from "./MessageList";
import {SuggestionSubject} from './SuggestionSubject';
import Items from "./items";
import Home from "../common/Home";
import Logout from "../common/Logout";
import {Messages} from "../../../lib/collections";
import {TextContainer} from "./TextContainer";

/*CSS*/

const SideBySide = styled.div`
    display: flex;
    justify-content: center; 
`;

const SubjectWrapper = styled.div`
    text-align: center;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

const WrapperChat = styled.div`
    display: flex;
    flex-direction: column;
`;


const WrapperItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 256px;
    
`;

Meteor.subscribe('pubMessage');

export default class ChatRoom extends Component {
    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout(e){
        e.preventDefault();
        Meteor.logout( (err) => {
            if (err) {
                console.log( err.reason );
            } else {
                this.props.history.push('/login');
            }
        });
    }

    render() {
        return (
            <main>
            <SubjectWrapper>
                <SuggestionSubject {...this.props}/>
            </SubjectWrapper>
            <Wrapper>
                <Home {...this.props}/>
                <SideBySide>
                    <WrapperItems>
                        <Items {...this.props}/>
                    </WrapperItems>
                    <WrapperChat>
                        <MessageList {...this.props}/>
                        <TextContainer {...this.props}/>
                    </WrapperChat>
                </SideBySide>
                <Logout {...this.props}/>
            </Wrapper>
            </main>
        );
    }
}
