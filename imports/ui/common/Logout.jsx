import { Meteor } from 'meteor/meteor';
import {Link} from "react-router-dom";
import React, {Component} from "react";
import styled from "styled-components";

const WrapperButton = styled.div`
    height: 24px;
    width: 128px;
`;

const SubmitButton = styled.button`
    color: black;
    height: 24px;
    width: 128px;
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

export default class Logout extends Component {
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
    };

    render() {
        return (
            <WrapperButton>
                <Link to="#"><SubmitButton onClick={this.logout}> <img src="/images/login.png" style={{ width: "16px", marginRight: "10px" }} />Logout</SubmitButton></Link>
            </WrapperButton>
        );
    }

}