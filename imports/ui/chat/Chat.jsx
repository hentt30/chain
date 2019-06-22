import React, { Component } from 'react';
import styled from 'styled-components';
import { Meteor } from 'meteor/meteor';
import Items from "./items";
import {withStyles} from '@material-ui/core/styles';
import BarTop from "./BarTop.jsx";
import Grid from '@material-ui/core/Grid';
import Hidden from "@material-ui/core/Hidden";

/*CSS*/
const StyledGrid = withStyles({
    root: {
        margin: 'auto',
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        height: '93vh',
    },
})(Grid)

const WrapperItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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


export default class Chat extends Component {
    constructor(props){
        super(props);
        this.state = this.getMeteorData();
        this.handleOnFocusMessage = this.handleOnFocusMessage.bind(this);
    }

    handleOnFocusMessage(){
        this.setState({messageIsFocused:true});
    }

    getMeteorData(){
        return { isAuthenticated: Meteor.userId() !== null };
    }

    componentWillMount(){
        if (!this.state.isAuthenticated) {
            this.props.history.push('/login');
        }
    }

    componentDidUpdate(prevProps, prevState){
        if (!this.state.isAuthenticated) {
            this.props.history.push('/login');
        }
    }

    render() {
        return (
            <PageWrapper>
                <WrapperBar >
                    <BarTop {...this.props}/>
                </WrapperBar>
                <StyledGrid xs={10}>
                    <Hidden>
                        <WrapperItems>
                            <Items {...this.props} />
                        </WrapperItems>
                    </Hidden>
                </StyledGrid>
            </PageWrapper>
        );
    }
}
