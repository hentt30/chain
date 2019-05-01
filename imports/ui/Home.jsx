import React, { Component } from 'react';
import styled from 'styled-components';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom';



/*CSS*/

const Title = styled.h1`
    text-align: center;
    font-size: 10.0em;
    color: #FFFFFF;
`;

const SubTitle = styled.h1`
     text-align: center;
    font-size: 3.0em;
    color:  #FFFFFF;
    margin-bottom: 50px;
`;

const EnterButton = styled.button`

    color: white;
    width: 200px;
    padding:30px;
    font-size:30px;

    margin: 10px;
    margin-top: 20px;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    background-color: #FF0000;
    border-radius:30px;
    vertical-align: center;
    text-align:center;

    &:hover {
    background-color: #FF0000;
    color: white;
    }   
`;

const CenterWrapper = styled.div`    
    width:100vw;
    height:100vh;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    background-image: url('/images/brain_home.jpg');


`;

export default class Home extends Component {

    render() {
        return (
            <CenterWrapper>
                <Title>Chain</Title>
                <SubTitle>Connecting People Through Ideas</SubTitle>
                <Link to="/signup"><EnterButton> <b>Sign Up</b> </EnterButton></Link>
                <Link to="/login"><EnterButton> <b>Login</b></EnterButton></Link>
            </CenterWrapper>
        );
    }
}
