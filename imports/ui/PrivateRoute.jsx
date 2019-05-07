import React from 'react'
import { Meteor } from 'meteor/meteor';
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {

    let isAuthenticated = Meteor.userId() !== null;

    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated === true ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
                )
            }
        />
    )
};

export default PrivateRoute