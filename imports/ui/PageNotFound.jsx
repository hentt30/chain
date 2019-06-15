import React, { Component } from 'react';
import styled from 'styled-components';
import { Meteor } from 'meteor/meteor';

export default class PageNotFound extends Component {
    constructor(props) {
        super(props);
    }

    redirect = () => {
        this.props.history.push('/');
    };

    render() {
        return (
            <main>
                {this.redirect()}
            </main>
        );
    }
}
