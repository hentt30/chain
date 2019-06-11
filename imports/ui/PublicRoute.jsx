import React from 'react'
import { Meteor } from 'meteor/meteor';
import { Redirect, Route } from 'react-router-dom'

const PublicRoute = ({ component: Component, ...rest }) => {

    let isAuthenticated = Meteor.userId() !== null;

    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated === false ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: '/chat', state: { from: props.location } }} />
                )
            }
        />
    )
};

export default PublicRoute