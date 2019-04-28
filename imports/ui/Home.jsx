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

const WrapperSpanInput = styled.div`

    position: relative;
    margin: 10px;
`;

const EmailHolder = styled.input`
    
    color: #0360ad;
    width: 200%;
    padding:2px;
    border: 0px;
    border-bottom: 1px solid #0360ad;
    &:focus{
        outline:none;
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

const Image = styled.img`
  
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height:auto;
    
`;

const PasswordHolder = styled.input`
    padding:2px;
    width: 200%;
    border: 0px;
    border-bottom: 1px solid #0360ad;
    color:#0360ad;

    &:focus{
        outline:none;
    }
`;

const SubmitButton = styled.button`

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

const StayAway1 = styled.div`

    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StayAway2 = styled.div`

    width:200%;
    margin-bottom: 50px;
`;

const PutInSameLineWrapper = styled.div`

    display: flex;
    flex-direction: row;
`;

const LittleText = styled.a`

    font-size: 10px;
    text-algin:center;
    color:#0360ad;
`;

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            emailIsFocused: false,
            passwordIsFocused: false,
        };

        this.handleOnFocusEmail = this.handleOnFocusEmail.bind(this);
        this.handleOnFocusPassword = this.handleOnFocusPassword.bind(this);
    }


    /*FUNCTIONS*/

    handleChangeEmail = event => {
        this.setState({ email: event.target.value });
    };

    handleChangePassword = event => {
        this.setState({ password: event.target.value });
    };

    handleOnFocusEmail() {
        this.setState({ emailIsFocused: true, });
    }

    handleOnFocusPassword() {
        this.setState({ passwordIsFocused: true, });
    }

    login = () => {
        Meteor.loginWithPassword(this.state.email, this.state.password);
        console.log('logged!');
    };

    render() {
        return (
            
            <CenterWrapper>
               
                <Title>Chain</Title>
                <SubTitle>Connecting People Through Ideas</SubTitle>
                <Link to="/signup"><SubmitButton onClick={this.login}> <b>Sign Up</b> </SubmitButton></Link>
                <Link to="/login"><SubmitButton onClick={this.login}> <b>Login</b></SubmitButton></Link>
                
                
               
            </CenterWrapper>
        );
    }
}
