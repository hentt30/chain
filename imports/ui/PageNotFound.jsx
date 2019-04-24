import React, { Component } from 'react';
import styled from 'styled-components';
import { Meteor } from 'meteor/meteor';

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


export default class PageNotFound extends Component {

    render() {
        return (
            <CenterWrapper>
                <Title>Chain</Title>
                <SubTitle>Page Not Found!</SubTitle>
            </CenterWrapper>
        );
    }
}
