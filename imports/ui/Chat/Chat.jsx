import React, { Component } from 'react';
import styled from 'styled-components';
import { Meteor } from 'meteor/meteor';
import {Link} from "react-router-dom";

/*CSS*/

const Title = styled.h1`
    text-align: center;
    font-size: 2.0em;
    color: #0360ad;
`;

const SubTitle = styled.h1`
     text-align: center;
    font-size: 1.0em;
    color: #0360ad;
    margin-bottom: 50px;
`;

const CenterWrapper = styled.div`

    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
`;

const SubmitButton = styled.button`

    color: black;
    width: 100%;
    margin: 0px;
    margin-top:0px;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    background-color: #ccc;
    border-radius:8px;
    vertical-align: center;
    text-align:center;

    &:hover {
    background-color: #0360ad;
    color: white;
    }   
`;

export default class Chat extends Component {
    constructor(props){
        super(props);
        this.state = this.getMeteorData();
        this.logout = this.logout.bind(this);
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
            <CenterWrapper>
                <Title>Chain</Title>
                <SubTitle>Chat!</SubTitle>
                <Link to="#"><SubmitButton onClick={this.logout}> <img src="/images/login.png" style={{width:"16px",marginRight:"10px"}}/>Logout</SubmitButton></Link>
            </CenterWrapper>
        );
    }
}
