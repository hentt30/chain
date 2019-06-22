import React, { Component } from 'react';
import styled from 'styled-components';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import StarRatings from 'react-star-ratings';
import { allSubjects } from '../../../api/subjects/allSubjects';
import {withStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from '@material-ui/core/Typography';

/*CSS*/
const StyledTypography = withStyles({
    root: {
        marginBottom: '10px',
    },
})(Typography)

const StyledButton = withStyles({
    root: {
        marginTop: '16px',
        marginBottom: '16px',
        width: '128px',
    },
})(Button)

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
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
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

export default class ChatSubjects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mixins: [ReactMeteorData],
            subject: '',
            s: -1,
            error: '',
            rating: 0,
        };
        this.changeRating = this.changeRating.bind(this);
        this.updateSubject = this.updateSubject.bind(this);
    };

    componentWillMount = () => {
        this.random();
    };

    random = () => {
        Meteor.call('isRated', Meteor.userId(), (error, result) => {
            if (error) {
                this.setState({error: error.reason, subject: ''});
            } else {
                if(this.state.s !== result.data){
                    this.setState({s: result.data, subject: allSubjects[result.data]});
                }
            }
        });
    };

    changeRating( newRating ) {
        this.setState({ rating: newRating });
    }

    updateSubject() {
        let s = this.state.s;
        if(0 <= s && s < allSubjects.length) {
            Meteor.call('insertUserSubject', this.state.rating/2, s);
            console.log("Subject insert!");
            this.random();
            this.setState({rating: 0});
        }
    }

    render() {
        const starProps = {
            starRatedColor: "blue",
            numberOfStars: 5,
            name: 'rating',
            starDimension: '40px',
            rating: this.state.rating
        };
        return (
            <CenterWrapper>
                <SubTitle>
                    <StyledTypography variant="h6">
                        {'Quanto você gosta de conversar sobre '}
                        {this.state.subject}
                        {'?!'}
                    </StyledTypography>
                    {this.state.subject !== '' ?
                        <main>
                        <StarRatings
                            {...starProps}
                            changeRating={this.changeRating}
                        />
                        <br/>
                        <StyledButton
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={this.updateSubject}
                        >
                            Enviar
                        </StyledButton>
                        </main>
                        : ''}
                </SubTitle>
            </CenterWrapper>
        );
    }
}
