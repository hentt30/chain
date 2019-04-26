import React, { Component } from 'react';
import styled from 'styled-components';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom';
import StarRating from './StarRating.jsx';

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

export default class SignUpSubjects extends Component {

    render() {
        return (
            <CenterWrapper>
                <Title>Chain</Title>
                <SubTitle>Connecting people through ideas</SubTitle>
                <StarRating />
            </CenterWrapper>
        );
    }
}
