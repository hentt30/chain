import React, { Component } from 'react';
import styled from 'styled-components';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import {Link} from "react-router-dom";
import Home from "../common/Home";
import Items from "./items";
import Logout from "../common/Logout";

/*CSS*/

const WrapperItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 256px;
    
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
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

    render() {
        return (
            <main>
                <TitleWrapper>
                   <p>Escolha alguém para conversar!</p>
                </TitleWrapper>
            <Wrapper>
                <Home {...this.props}/>
                <WrapperItems>
                    <Items {...this.props}/>
                </WrapperItems>
                <Logout {...this.props}/>
            </Wrapper>
            </main>
        );
    }
}
