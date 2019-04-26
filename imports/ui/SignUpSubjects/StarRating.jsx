import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import StarRatings from 'react-star-ratings';
import styled from "styled-components";
import { allSubjects } from '../../api/subjects/allSubjects.js';

const SubTitle = styled.h1`
    text-align: center;
    font-size: 1.0em;
    color: #0360ad;
`;


export default class StarRating extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rating: 0
        };

        this.changeRating= this.changeRating.bind(this);
    }

    changeRating( newRating ) {
        this.setState({ rating: newRating, });
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
                <SubTitle>{allSubjects[0][0]}</SubTitle>
                <StarRatings
                    {...starProps}
                    changeRating={this.changeRating}
                />
                <SubTitle>{allSubjects[0][1]}</SubTitle>
                <StarRatings
                    {...starProps}
                    changeRating={this.changeRating}
                />
                <SubTitle>{allSubjects[0][2]}</SubTitle>
                <StarRatings
                    {...starProps}
                    changeRating={this.changeRating}
                />
                <SubTitle>{allSubjects[0][3]}</SubTitle>
                <StarRatings
                    {...starProps}
                    changeRating={this.changeRating}
                />
                <SubTitle>{allSubjects[0][4]}</SubTitle>
                <StarRatings
                    {...starProps}
                    changeRating={this.changeRating}
                />
            </div>
        );
    }
}
