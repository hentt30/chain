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
import {Redirect, withHistory} from 'react-router-dom';


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
`;

const SubTitle = styled.h1`
    text-align: center;
    font-size: 3.0em;
    color:  #FFFFFF;
    font-family:'Monospace';
    margin-bottom: 50px;
`;

const Background = styled.div`    
    width:100vw;
    height:100vh;
    display:flex;
    justify-content:space-around;
    background-image: url('/images/brain_home.jpg');
`;
const Description = styled.div`
   display: flex;
   flex-direction:column;
   align-items: center;
   justify-content: center;
   width: 100%;
`;

const Login = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   text-align:column;
   width: 100%;
`;
const LittleText = styled.a`

    font-size: 10px;
    text-algin:center;
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
        //        Meteor.loginWithPassword(this.state.email, this.state.password);
        //        console.log('logged!');
        
                event.preventDefault();
        
                console.log('E - submit #form-login');
        
                /*if(this.state.email != '' && this.state.password != '') {
                    Meteor.loginWithPassword(this.state.email, this.state.password, (error) => {
                        console.log('M - loginWithPassword / callback');
                        if(error) {
                            this.setState({ error: error.reason });
                        } else if(!Accounts.onLogin()) {
                            this.setState({error: "Login Failed"});
                        } else {
                            console.log(Meteor.userId());
                            this.setState({ redirect: false })
                        }
                    });
                } else {
                    this.setState({ error: 'Please provide username and password.' });
                }*/
        
                Meteor.loginWithPassword(this.state.email, this.state.password, (err) => {
                    if(err){
                        this.setState({
                            error: err.reason
                        });
                    } else {
                        console.log('oi fake'); 
                        this.props.history.push('/chat');
                    }
                });
        
            };
    
    render() {
     

        return (
            
            <Background>
                { this.state.error ? <p className="alert alert-danger">{ this.state.error }</p> : '' }
                <Description>
                    <Title>Chain</Title>
                    <SubTitle>Connecting People through ideas</SubTitle>
                </Description>
                    
                <Login>
                    <StyledPaper>
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
                                                    />
                        <LittleText> <Link to="/signup"> Still don't have an account? Click here! </Link></LittleText>
                        <StyledFab variant="extended" aria-label="Delete" onClick ={this.login}>
                             <StyledNavigationIcon onClick ={this.login} />
                             Enter
                        </StyledFab>
                        
                    </StyledPaper>
                </Login> 
            </Background>
    
        );
    }
}
