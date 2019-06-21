import React, { Component } from 'react';
import styled from 'styled-components';
import { Meteor } from 'meteor/meteor';
import StarRating from './StarRating.jsx';
import { allSubjects } from '../../../api/subjects/allSubjects';
import { UsersSubjects } from '../../../../lib/collections'

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

export default class ChatSubjects extends Component {


    random = () => {
        const len = allSubjects.length;
        let s = 0, isRated = true;
        while(isRated && s < len){
            isRated = UsersSubjects.find({ userId: Meteor.userId() }).map(u => u[s][1]);
            console.log(UsersSubjects.find({ userId: Meteor.userId() }).map(u => u))
            s++;
        }
        if(!isRated){
            return (<StarRating {...{i: s}}/>);
        }
        else{
            return '';
        }
        
    };

    render() {
        let s = this.random();
        console.log(s);
        return (
            <CenterWrapper>
                <Title>Chain</Title>
                <SubTitle>Connecting people through ideas</SubTitle>
                {this.random()}
                <SubmitButton onClick = {s = this.random()}> <img src="/images/login.png" style={{width:"16px",marginRight:"10px"}}/>Enter</SubmitButton>
            </CenterWrapper>
        );
    }
}
