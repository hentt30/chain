import React, { Component } from 'react';
import styled from 'styled-components';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import {MessageList} from "./MessageList";
import Items from "./items";
import {Link} from "react-router-dom";

/*CSS*/

const Forma = styled.div`
    display:inline-block;
`;

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
                <Link to="#"><SubmitButton onClick={this.logout}> <img src="/images/login.png" style={{ width: "16px", marginRight: "10px" }} />Logout</SubmitButton></Link>
                <Items {...this.props}/>
                <Forma>
                    <MessageList {...this.props}/>
                </Forma>
            </main>
        );
    }
}
