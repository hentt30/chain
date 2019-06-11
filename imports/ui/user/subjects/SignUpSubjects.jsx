import React, { Component } from 'react';
import styled from 'styled-components';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom';
import StarRating from './StarRating.jsx';
import { allSubjects } from '../../../api/subjects/allSubjects';

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

export default class SignUpSubjects extends Component {


    allDiffs = (s) => {
        let diffs = true;
        let n = s.length;
        for(let i = 0; i < n && diffs === true; i++){
            for(let j = 0; j < n && diffs === true; j++){
                if(s[i] === s[j] && i !== j){
                    diffs = false;
                }
            }
        }
        return diffs;
    };

    random = () => {
        const len = allSubjects.length;
        let s = [0, 0, 0, 0, 0];
        let diffs = false;
        while(!diffs) {
            s = [
                Math.floor(Math.random()*(len)),
                Math.floor(Math.random()*(len)),
                Math.floor(Math.random()*(len)),
                Math.floor(Math.random()*(len)),
                Math.floor(Math.random()*(len)),
            ];
            diffs = this.allDiffs(s);
        }
        return s;
    };

    render() {
        const s = this.random();
        console.log(s);
        return (
            <CenterWrapper>
                <Title>Chain</Title>
                <SubTitle>Connecting people through ideas</SubTitle>
                <StarRating {...{i: s[0]}}/>
                <StarRating {...{i: s[1]}}/>
                <StarRating {...{i: s[2]}}/>
                <StarRating {...{i: s[3]}}/>
                <StarRating {...{i: s[4]}}/>
                <Link to="/chat"><SubmitButton > <img src="/images/login.png" style={{width:"16px",marginRight:"10px"}}/>Enter</SubmitButton></Link>
            </CenterWrapper>
        );
    }
}
