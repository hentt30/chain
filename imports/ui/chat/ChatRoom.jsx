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
import BarTop from "./BarTop";
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';

/*CSS*/

const StyledGrid = withStyles({
    root: {
        margin: 'auto',
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        height: '93vh',
    },
})(Grid)

const WrapperChat = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`;

const WrapperItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 100%;
`;

const WrapperBar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height:7%;
    
`;

const PageWrapper = styled.div`
    height: 100%;
`;


Meteor.subscribe('pubMessage');

export default class ChatRoom extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <PageWrapper>
                <WrapperBar >
                    <BarTop {...this.props}/>
                </WrapperBar>
                <StyledGrid xs={10}>
                    <Hidden smDown>
                        <WrapperItems>
                            <Items {...this.props} />
                        </WrapperItems>
                    </Hidden>
                    <WrapperChat>
                        <MessageList {...this.props} />
                        <TextContainer {...this.props}/>
                    </WrapperChat>
                </StyledGrid>
            </PageWrapper>
        );
    }
}
/*
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
*/