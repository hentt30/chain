import React from 'react';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import { Meteor } from 'meteor/meteor';

// route components
import App from './ui/App.jsx';
import SignUp from './ui/SignUp.jsx';
import SignUpSubjects from './ui/SignUpSubjects.jsx';
import Chat from './ui/Chat.jsx';
import PageNotFound from './ui/PageNotFound.jsx';
import PrivateRoute from './ui/PrivateRoute.jsx';


const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/signup" component={SignUp}/>
            <PrivateRoute exact path="/signup-subjects" component={SignUpSubjects}/>
            <PrivateRoute exact path="/chat" component={Chat}/>
            <Route component={PageNotFound}/>
        </Switch>
    </Router>
);
