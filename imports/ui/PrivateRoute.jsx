import React from 'react'
import { Meteor } from 'meteor/meteor';
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {

    // Add your own authentication on the below line.
    const isLoggedIn = !Meteor.user();

    return (
        <Route
            {...rest}
            render={props =>
                isLoggedIn ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: '/', state: { from: props.location } }} />
                )
            }
        />
    )
};

export default PrivateRoute