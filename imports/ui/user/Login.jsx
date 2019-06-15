import React, { Component } from 'react';
import styled from 'styled-components';
import { Meteor } from 'meteor/meteor';
import {Link, withHistory} from 'react-router-dom';
import TextField from "../Home";
import {withStyles} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import NavigationIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Typography from "@material-ui/core/Typography";

const StyledPaper = withStyles({
    root: {
        padding: '10px 100px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
    },

})(Paper)

const StyledFab = withStyles({
    root: {
        margin : '8px',
    },

})(Fab)

const StyledNavigationIcon = withStyles({
    root: {
        marginRight:'8px',
    },

})(NavigationIcon)

const StyledTypography = withStyles({
    root: {
        fontWeight:'fontWeightBold',
        fontFamily:'Monospace',
        fontSize:'75px',
    },
})(Typography)



/*CSS*/

const LittleText = styled.a`

    font-size: 10px;
    text-algin:center;
    color:#0360ad;
`;

const LoginWrapper = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   text-align:column;
   width: 100%;
`;

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: '',
        };
    }


    /*FUNCTIONS*/

    handleChangeEmail = event => {
        this.setState({ email: event.target.value });
    };

    handleChangePassword = event => {
        this.setState({ password: event.target.value });
    };

    login = (event) => {
        event.preventDefault();

        console.log('E - submit #form-login');

        Meteor.loginWithPassword(this.state.email, this.state.password, (err) => {
            if(err){
                this.setState({
                    error: err.reason
                });
            } else {
                this.props.history.push('/chat');
            }
        });

    };

    enterPress = event => {
        let code = event.key;
        if(code === 'Enter'){
            this.login();
        }
    };


    render() {
        return (
                <StyledPaper>
                    <LoginWrapper>

                    <StyledTypography >
                        Login
                    </StyledTypography>
                    <TextField
                        id="email"
                        label="Email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        margin="normal"
                        variant="outlined"
                        value = {this.state.email}
                        onChange = {this.handleChangeEmail}
                        onKeyPress={this.enterPress}
                    />

                    <TextField
                        id="password"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        variant="outlined"
                        value = {this.state.password}
                        onChange = {this.handleChangePassword}
                        onKeyPress={this.enterPress}
                    />
                    <LittleText> <Link to="/signup"> Still don't have an account? Click here! </Link></LittleText>
                    <StyledFab variant="extended" aria-label="Delete" onClick ={this.login}>
                        <StyledNavigationIcon onClick ={this.login} />
                        Enter
                    </StyledFab>
                </StyledPaper>
            </LoginWrapper>
        );
    }
}
