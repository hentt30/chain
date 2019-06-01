import React, { Component } from 'react';
import styled from 'styled-components';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import {Link} from "react-router-dom";
import Items from "./items";

/*CSS*/

const SubmitButton = styled.button`

    color: black;
    width: 8%;
    margin: 0px;
    margin-top:0px;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    background-color: #ccc;
    border-radius:20px;
    vertical-align: center;
    text-align:center;
    float:right;

    &:hover {
    background-color: #0360ad;
    color: white;
    float:right;
    }   
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
                <Link to="#"><SubmitButton onClick={this.logout}> <img src="/images/login.png" style={{ width: "16px", marginRight: "10px" }} />Logout</SubmitButton></Link>
                <Items {...this.props}/>
            </main>
        );
    }
}
