import { Meteor } from 'meteor/meteor';
import React, {Component} from "react";
import styled from "styled-components";
import {StyledFab, StyledNavigationIcon} from './StandardButtonStyle';

const WrapperButton = styled.div`
    height: 24px;
    width: 128px;
`;

export default class Logout extends Component {
    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout(e){
        e.preventDefault();
        Meteor.logout( (err) => {
            if (err) {
                console.log( err.reason );
            } else {
                this.props.history.push('/');
            }
        });
    };

    render() {
        return (
            <WrapperButton>
                <StyledFab variant="extended" aria-label="Delete" onClick ={this.logout}>
                    <StyledNavigationIcon/>
                    Logout
                </StyledFab>
            </WrapperButton>
        );
    }

}