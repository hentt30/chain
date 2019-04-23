import React, { Component } from 'react';
import styled from 'styled-components';

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
    width: 50%;
    margin:10px;
    margin-top:0px;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    background-color: #ccc;
    border-radius:10px;
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

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            emailIsFocused: false,
            passwordIsFocused: false,
        };

        this.handleOnFocusEmail = this.handleOnFocusEmail.bind(this);
        this.handleOnFocusPassword = this.handleOnFocusPassword.bind(this);
    }


    /*FUNCTIONS*/

    handleOnFocusEmail() {
        this.setState({ emailIsFocused: true, });
    }

    handleOnFocusPassword() {
        this.setState({ passwordIsFocused: true, });
    }

    render() {
        return (
            <CenterWrapper>
                <Title>Chain</Title>
                <SubTitle>Connecting peopole through ideas</SubTitle>
                <CenterWrapper>
                    <StayAway1>
                        <StayAway2>
                            <PutInSameLineWrapper>
                                <WrapperSpanInput>
                                    <TitleInInput
                                        isFocused={this.state.emailIsFocused}
                                        onClick={() => { this.handleOnFocusEmail() }}
                                    >
                                        <ImageNextToInput src="/images/user.png" />Email
                                    </TitleInInput>
                                    <EmailHolder type="email" name="email" onFocus={() => { this.handleOnFocusEmail() }} />
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
                                        <ImageNextToInput src="/images/lock.png" />Password
                                    </TitleInInput>
                                    <PasswordHolder type="password" name="password" onFocus={() => { this.handleOnFocusPassword() }} />
                                </WrapperSpanInput>
                            </PutInSameLineWrapper>
                        </StayAway2>
                        <SubmitButton> <img src="/images/login.png" style={{width:"16px",marginRight:"10px"}}/>Enter</SubmitButton>
                    </StayAway1>
                </CenterWrapper>
                <LittleText>Still don't have an account? Click here!</LittleText>
            </CenterWrapper>
        );
    }
}
