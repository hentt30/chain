import React, { Component } from 'react';
import styled from 'styled-components';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import {Link} from "react-router-dom";
import Home from "../common/Home";
import Items from "./items";
import Logout from "../common/Logout";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';
import BarTop from "./BarTop.jsx";

/*CSS*/

const WrapperItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 256px;
    
`;

const WrapperBar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

const TitleWrapper = styled.div`
    text-align: center;
`;

export default class Chat extends Component {
    constructor(props){
        super(props);
        this.state = this.getMeteorData();
        this.logout = this.logout.bind(this);
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
    /*            <Wrapper>
                <Home {...this.props}/>
                <WrapperItems>
                    <Items {...this.props}/>
                </WrapperItems>
                <Logout {...this.props}/> 
            </Wrapper> */
            /*                <TitleWrapper>
                   <p>Escolha alguém para conversar!</p>
                </TitleWrapper>*/ 

    render() {
        return (
            <main>

                <Wrapper>
                    <WrapperItems>
                      
                        <Items{...this.props}/ >
                        
                    </WrapperItems>
                    <WrapperBar>
                    <BarTop/>
                        
                    </WrapperBar>

                </Wrapper>

            </main>
        );
    }
}
