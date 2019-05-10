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
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
`;
const forma = styled.div`
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
const TitleInInput = styled.span`

    position: absolute;
    left: 2px;
    transition: 0.8s ease;
    color: ${props => (props.isFocused ? "#0360ad" : "#a2a6ad")};
    top: ${props => (props.isFocused ? "-15px" : "auto")};
    font-size: ${props => (props.isFocused ? "0.75em" : "auto")};
`;
const MessageHolder = styled.input`
    
    color: #0360ad;
    width: 50%;
    padding:14px;
    border-bottom: 1px solid #0360ad;
    position:absolute;
    top:90%;
    left:25%
    &:focus{
        outline:none;
    }
`;
const SendButton = styled.button`

    color: black;
    width: 7%;
    margin: 0px;
    margin-left:8px;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    background-color: #ccc;
    border-radius:0px;
    vertical-align: center;
    text-align:center;
    position:absolute;
    top:91%;
    right:14%;
    
  

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

    send(e){

    }


    render() {
        return (
            <main>
                <Link to="#"><SubmitButton onClick={this.logout}> <img src="/images/login.png" style={{ width: "16px", marginRight: "10px" }} />Logout</SubmitButton></Link>
                <forma>
                <MessageHolder id="username" type="username" name="username"/>
                <SendButton onClick={this.send}> <img src="/images/seta.png" style={{ width: "16px", marginRight: "10px" }} /><b>Send</b></SendButton>
                </forma>
                <CenterWrapper>



                </CenterWrapper>



            </main >
        );
    }
}
