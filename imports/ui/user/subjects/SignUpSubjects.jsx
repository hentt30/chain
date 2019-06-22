import React, { Component } from 'react';
import styled from 'styled-components';
import StarRating from './StarRating.jsx';
import { allSubjects } from '../../../api/subjects/allSubjects';
import {withStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";
import Divider from '@material-ui/core/Divider';
import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';

const StyledCard = withStyles({
    minHeight: '100px',
    margin: 8,
})(Card)


const StyledCardContent = withStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
})(CardContent)


const StyledGrid = withStyles({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
})(Grid)

const StyledButton = withStyles({
    root: {
        marginTop: '16px',
        marginBottom: '8px',
        width: '128px',
    },
})(Button)

/*CSS*/

const Title = styled.h1`
    text-align: center;
    font-size: 3.0em;
    font-family:'Monospace';
    color: #0360ad;
    margin-bottom: 0px;
`;

const SubTitle = styled.h1`
    width: 600px;
    text-align: center;
    align-items: center;  
    margin-top: 0px;
    font-size: 1em;
    color:  #0360ad;
    font-family:'Monospace';
`;

const CenterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
`;

export default class SignUpSubjects extends Component {
    constructor(props) {
        super(props);
        this.router = this.router.bind(this);
    };

    allDiffs = (s) => {
        let diffs = true;
        let n = s.length;
        for(let i = 0; i < n && diffs === true; i++){
            for(let j = 0; j < n && diffs === true; j++){
                if(s[i] === s[j] && i !== j){
                    diffs = false;
                }
            }
        }
        return diffs;
    };

    random = () => {
        const len = allSubjects.length;
        let s = [0, 0, 0, 0, 0];
        let diffs = false;
        while(!diffs) {
            s = [
                Math.floor(Math.random()*(len)),
                Math.floor(Math.random()*(len)),
                Math.floor(Math.random()*(len)),
                Math.floor(Math.random()*(len)),
                Math.floor(Math.random()*(len)),
            ];
            diffs = this.allDiffs(s);
        }
        return s;
    };

    router = () => {
        this.props.history.push('/chat');
    };

    render() {
        const s = this.random();
        console.log(s);
        return (
            <CenterWrapper>
                <StyledGrid>
                    <Title>chAIn</Title>
                    <SubTitle>Conectando pessoas atráves de ideias</SubTitle>
                </StyledGrid>
                <StyledCard>
                    <StyledCardContent>
                    <StarRating {...{i: s[0]}}/>
                    <StarRating {...{i: s[1]}}/>
                    <StarRating {...{i: s[2]}}/>
                    <StarRating {...{i: s[3]}}/>
                    <StarRating {...{i: s[4]}}/>
                    <StyledButton
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={this.router}
                    >
                        Continuar
                    </StyledButton>
                    </StyledCardContent>
                </StyledCard>
            </CenterWrapper>
        );
    }
}
