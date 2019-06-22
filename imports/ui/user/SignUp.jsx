import React, { Component } from 'react';
import styled from 'styled-components';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Link} from "react-router-dom";

const StyledAvatar = withStyles({
    root: {
        margin: '8 px',
        backgroundColor: '#F1EAEA',
    },
})(Avatar)

const StyledTypography = withStyles({
    root: {
        fontFamily: 'Monospace',
        fontSize: '30px',
    },
})(Typography)

const StyledButton = withStyles({
    root: {
        marginTop: '24px',
        marginLeft: '0px',
        marginLeft: '0px',
        marginBottom: '16px',

    },
})(Button)
/*CSS*/
const Div = styled.div`
    margin-top : 36px;
    display: flex;
    flex-direction: column;
    align-items:center;
    
`;
const Form = styled.div`
        width: 100%;
        margin-top: 24px
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
            error: '',
            accountCreated: false,
        };
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

    createAccount = () => {
        console.log('E - submit #form-signup');

        let newUserData = {
            email: this.state.email,
            password: this.state.password,
            username: this.state.username,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
        };

        if (newUserData.email !== '' && newUserData.password !== '' && newUserData.username !== '' && newUserData.firstName !== '' && newUserData.lastName !== '') {
            console.log(newUserData);
            Accounts.createUser(newUserData);
            Meteor.call('insertUser', newUserData, (error) => {
                if (error) {
                    console.log(error);
                    this.setState({ error: error.reason });
                } else {
                    Meteor.call('insertProfile', newUserData);
                    this.state.accountCreated = true;
                    console.log('Created Account');
                }
            });
            console.log('Logged!');
        } else {
            this.setState({ error: 'Please provide all fields.' });
        }
    };

    enterPress = event => {
        let code = event.key;
        if(code === 'Enter'){
            this.createAccount();
        }
    };

    loginRoute = () => {
        if (Meteor.userId()) {
            Meteor.userId() ? this.props.history.push('/signup-subjects') : '';
        }
    };



    render() {

        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Div>
                    { this.state.error ? <p className="alert alert-danger">{ this.state.error }</p> : '' }
                    <StyledAvatar>
                        <LockOutlinedIcon />
                    </StyledAvatar>
                    <StyledTypography component="h1" variant="h5">
                        Sign up
                    </StyledTypography>
                        <Form>
                            <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="fname"
                                    name="firstName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    value = {this.state.firstName}
                                    onChange = {this.handleChangeFirstName}
                                    onKeyPress={this.enterPress}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="lname"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    value = {this.state.lastName}
                                    onChange = {this.handleChangeLastName}
                                    onKeyPress={this.enterPress}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="username"
                                    label="Username"
                                    name="username"
                                    autoComplete="username"
                                    value = {this.state.username}
                                    onChange = {this.handleChangeUsername}
                                    onKeyPress={this.enterPress}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    value = {this.state.email}
                                    onChange = {this.handleChangeEmail}
                                    onKeyPress={this.enterPress}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    value = {this.state.password}
                                    onChange = {this.handleChangePassword}
                                    onKeyPress={this.enterPress}
                                />
                            </Grid>

                        </Grid>
                        <StyledButton
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={this.createAccount}
                        >
                            Sign Up
                        </StyledButton>
                    </Form>
                    {this.loginRoute()}
                </Div>
                <Box mt={5}>
                    <Typography variant="body2" color="textSecondary" align="center">
                        <Link to="/"> Volte para o login! </Link>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" align="center">

                        {'Built with love  by the chAIn'}
                        
                        {' team.'}
                    </Typography>
                </Box>


            </Container>


        );
    }
}
