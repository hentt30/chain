import React from 'react';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import {Meteor} from 'meteor/meteor';

// route components
import App from './ui/App.jsx';
import SignUp from './ui/SignUp.jsx';
import SignUpSubjects from './ui/SignUpSubjects.jsx';
import Chat from './ui/Chat.jsx';
import PageNotFound from './ui/PageNotFound.jsx';
import Header from './ui/Header.jsx';



const browserHistory = createBrowserHistory();

const authenticate = (nextState, replace) => {
    if (!Meteor.loggingIn() && !Meteor.userId()) {
        replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname },
        });
    }
};

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/signup" component={SignUp}/>
            <Route exact path="/signup-subjects" component={SignUpSubjects} onEnter={authenticate}/>
            <Route exact path="/chat" component={Chat} onEnter={authenticate}/>
            <Route component={PageNotFound}/>
            <Route exact path="/test" component={Header}/>
        </Switch>
    </Router>
);