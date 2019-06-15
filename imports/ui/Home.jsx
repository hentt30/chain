import React, { Component } from 'react';
import styled from 'styled-components';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';


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

const Title = styled.h1`
    text-align: center;
    font-size: 10.0em;
    font-family:'Monospace';
    color: #FFFFFF;
    margin-bottom: 0px;s
`;

const SubTitle = styled.h1`
    width: 600px;
    text-align: center;
    align-items: center;  
    font-size: 3.0em;
    color:  #FFFFFF;
    font-family:'Monospace';
`;

const Background = styled.div`    
    width:100vw;
    height:100vh;
    display: flex;
    justify-content: space-around;
    background-image: url('/images/brain_home.jpg');
`;

const Description = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    text-align: column;
    align-items: center;    
    width: 100%;
`;

const LoginWrapper = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   text-align: column;
   width: 100%;
`;
const LittleText = styled.a`

    font-size: 10px;
    text-align:center;
    color:#0360ad;
    padding: 10px;
`;


export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: '',
            redirect: false,
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
        console.log('oi');
        let code = event.key;
        if(code === 'Enter'){
            this.login(event);
        }
    };

    render() {
     

        return (

            <Background>
                <Description>
                    <Title>chAIn</Title>
                    <SubTitle>Connecting People Through Ideas</SubTitle>
                </Description>

                <LoginWrapper>
                    <StyledPaper>
                        { this.state.error ? <p className="alert alert-danger">{ this.state.error }</p> : '' }
                        <StyledTypography>
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
                            onKeyPress={this.enterPress}
                            onChange = {this.handleChangeEmail}
                        />

                        <TextField
                            id="password"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            margin="normal"
                            variant="outlined"
                            value = {this.state.password}
                            onKeyPress={this.enterPress}
                            onChange = {this.handleChangePassword}
                        />

                        <LittleText> <Link to="/signup"> Still don't have an account? Click here! </Link></LittleText>
                        <StyledFab variant="extended" aria-label="Delete" onClick ={this.login}>
                             <StyledNavigationIcon/>
                             Enter
                        </StyledFab>
                    </StyledPaper>
                </LoginWrapper>
            </Background>

        );
    }
}
