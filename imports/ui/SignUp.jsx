import React, { Component } from 'react';
import styled from 'styled-components';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom';

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

const FirstNameHolder = styled.input`
    
    color: #0360ad;
    width: 200%;
    padding:2px;
    border: 0px;
    border-bottom: 1px solid #0360ad;
    &:focus{
        outline:none;
    }
`;

const LastNameHolder = styled.input`
    
    color: #0360ad;
    width: 200%;
    padding:2px;
    border: 0px;
    border-bottom: 1px solid #0360ad;
    &:focus{
        outline:none;
    }
`;

const UsernameHolder = styled.input`
    
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

const ImageNextToInput = styled.img`

    width:16px;
    padding:0px;
    margin:0px;
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

const CenterWrapper = styled.div`

    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
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

export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            username: '',
            emailIsFocused: false,
            passwordIsFocused: false,
            firstNameIsFocused: false,
            lastNameIsFocused: false,
            usernameIsFocused: false
        };

        this.handleOnFocusEmail = this.handleOnFocusEmail.bind(this);
        this.handleOnFocusPassword = this.handleOnFocusPassword.bind(this);
        this.handleOnFocusFirstName = this.handleOnFocusFirstName.bind(this);
        this.handleOnFocusLastName = this.handleOnFocusLastName.bind(this);
        this.handleOnFocusUsername = this.handleOnFocusUsername.bind(this);
    }


    /*FUNCTIONS*/

    handleChangeEmail = event => {
        this.setState({ email: event.target.value });
    };

    handleChangePassword = event => {
        this.setState({ password: event.target.value });
    };

    handleChangeFirstName = event => {
        this.setState({ firstName: event.target.value });
    };

    handleChangeLastName = event => {
        this.setState({ lastName: event.target.value });
    };

    handleChangeUsername = event => {
        this.setState({ username: event.target.value });
    };

    handleOnFocusEmail() {
        this.setState({ emailIsFocused: true, });
    }

    handleOnFocusPassword() {
        this.setState({ passwordIsFocused: true, });
    }

    handleOnFocusFirstName() {
        this.setState({ firstNameIsFocused: true, });
    }

    handleOnFocusLastName() {
        this.setState({ lastNameIsFocused: true, });
    }

    handleOnFocusUsername() {
        this.setState({ usernameIsFocused: true, });
    }

    createAccount = () => {
        let newUserData = {
            email: this.state.email,
            password: this.state.password,
            username: this.state.username,
            firstName: this.state.firstName,
            lastName: this.state.lastName
        };
        console.log(newUserData);
        Meteor.call('insertUser', newUserData);
        console.log('Created Account');
        Meteor.loginWithPassword(this.state.email, this.state.password);
        Meteor.call('insertProfile', newUserData);
        console.log('Logged!');
    };

    render() {
        return (
            <CenterWrapper>
                <Title>Chain</Title>
                <SubTitle>Join us!</SubTitle>
                <CenterWrapper>
                    <StayAway1>
                        <StayAway2>
                            <PutInSameLineWrapper>
                                <WrapperSpanInput>
                                    <TitleInInput
                                        isFocused={this.state.firstNameIsFocused}
                                        onClick={() => { this.handleOnFocusFirstName() }}
                                    >
                                        <ImageNextToInput src="/images/user.png" /> First-Name
                                    </TitleInInput>
                                    <FirstNameHolder id="firstName" type="firstName" name="firstName" onFocus={() => { this.handleOnFocusFirstName() }} value={this.state.firstName} onChange={this.handleChangeFirstName}/>
                                </WrapperSpanInput>
                            </PutInSameLineWrapper>
                        </StayAway2>
                        <StayAway2>
                            <PutInSameLineWrapper>
                                <WrapperSpanInput>
                                    <TitleInInput
                                        isFocused={this.state.lastNameIsFocused}
                                        onClick={() => { this.handleOnFocusLastName() }}
                                    >
                                        <ImageNextToInput src="/images/user.png" /> Last-Name
                                    </TitleInInput>
                                    <LastNameHolder id="lastName" type="lastName" name="lastName" onFocus={() => { this.handleOnFocusLastName() }} value={this.state.lastName} onChange={this.handleChangeLastName}/>
                                </WrapperSpanInput>
                            </PutInSameLineWrapper>
                        </StayAway2>
                        <StayAway2>
                            <PutInSameLineWrapper>
                                <WrapperSpanInput>
                                    <TitleInInput
                                        isFocused={this.state.usernameIsFocused}
                                        onClick={() => { this.handleOnFocusUsername() }}
                                    >
                                        <ImageNextToInput src="/images/user.png" /> Username
                                    </TitleInInput>
                                    <UsernameHolder id="username" type="username" name="username" onFocus={() => { this.handleOnFocusUsername() }} value={this.state.username} onChange={this.handleChangeUsername}/>
                                </WrapperSpanInput>
                            </PutInSameLineWrapper>
                        </StayAway2>
                        <StayAway2>
                            <PutInSameLineWrapper>
                                <WrapperSpanInput>
                                    <TitleInInput
                                        isFocused={this.state.emailIsFocused}
                                        onClick={() => { this.handleOnFocusEmail() }}
                                    >
                                        <ImageNextToInput src="/images/user.png" /> Email
                                    </TitleInInput>
                                    <EmailHolder id="email" type="email" name="email" onFocus={() => { this.handleOnFocusEmail() }} value={this.state.email} onChange={this.handleChangeEmail}/>
                                </WrapperSpanInput>
                            </PutInSameLineWrapper>
                        </StayAway2>
                        <StayAway2>
                            <PutInSameLineWrapper>
                                <WrapperSpanInput>
                                    <TitleInInput
                                        isFocused={this.state.passwordIsFocused}
                                        onClick={() => { this.handleOnFocusPassword() }}
                                    >
                                        <ImageNextToInput src="/images/lock.png" /> Password
                                    </TitleInInput>
                                    <PasswordHolder id="password" type="password" name="password" onFocus={() => { this.handleOnFocusPassword() }} value={this.state.password} onChange={this.handleChangePassword}/>
                                </WrapperSpanInput>
                            </PutInSameLineWrapper>
                        </StayAway2>
                        <Link to="/signup-subjects"><SubmitButton onClick={this.createAccount}> <img src="/images/login.png" style={{width:"16px",marginRight:"10px"}}/>Enter</SubmitButton></Link>
                    </StayAway1>
                </CenterWrapper>
                <LittleText>Thank you for choosing us. Enjoy it!</LittleText>
            </CenterWrapper>
        );
    }
}
