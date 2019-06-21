import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import StarRatings from 'react-star-ratings';
import styled from "styled-components";
import { allSubjects } from '../../../api/subjects/allSubjects.js';

const SubTitle = styled.h1`
    text-align: center;
    font-size: 1.0em;
    color: #0360ad;
`;

const CenterWrapper = styled.div`

    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
`;


export default class StarRating extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: 0,
            i: props.i,
        };

        this.changeRating = this.changeRating.bind(this);
        this.updateSubjects = this.updateSubjects.bind(this);
    }

    changeRating( newRating ) {
        this.setState({ rating: newRating, });
    }

    updateSubjects(i) {
        let num_subjects = allSubjects.length;
        for(let k=0; k < num_subjects; k++) {
            Meteor.call('insertUserSubject', this.state.rating/2, i);
        }
        Meteor.call('insertUserSubject', this.state.rating/8, i-2);
        Meteor.call('insertUserSubject', this.state.rating/4, i-1);
        Meteor.call('insertUserSubject', this.state.rating/2, i);
        Meteor.call('insertUserSubject', this.state.rating/4, i+1);
        Meteor.call('insertUserSubject', this.state.rating/8, i+2);
        console.log("Subject insert!");
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
            <div>
                <CenterWrapper>
                <SubTitle>{allSubjects[this.state.i]}</SubTitle>
                <StarRatings
                    {...starProps}
                    changeRating={this.changeRating}
                    onClick={this.updateSubjects(this.state.i)}
                />
                <br/>
                </CenterWrapper>
            </div>
        );
    }
}
