import { Meteor } from 'meteor/meteor';
import React, {Component} from "react";
import styled from "styled-components";
import {StyledFab, StyledNavigationIcon} from './StandardButtonStyle';

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
        this.home = this.home.bind(this);
    }

    home(e){
        e.preventDefault();
        this.props.history.push('/');
    };

    render() {
        return (
            <WrapperButton>
                <StyledFab variant="extended" aria-label="Delete" onClick ={this.home}>
                    <StyledNavigationIcon/>
                    Home
                </StyledFab>
            </WrapperButton>
        );
    }
}