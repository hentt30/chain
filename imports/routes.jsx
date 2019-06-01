import React from 'react';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory as createHistory } from 'history';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

// route components
import App from './ui/App.jsx';
import SignUp from './ui/user/SignUp.jsx';
import SignUpSubjects from './ui/user/subjects/SignUpSubjects.jsx';
import Chat from './ui/chat/Chat.jsx';
import ChatRoom from './ui/chat/ChatRoom.jsx';
import PageNotFound from './ui/PageNotFound.jsx';
import Login from './ui/user/Login.jsx';
import PrivateRoute from "./ui/PrivateRoute";

const browserHistory = createHistory();

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/signup" component={SignUp}/>
            <Route exact path="/login" component={Login}/>
            <PrivateRoute exact path="/signup-subjects" component={SignUpSubjects}/>
            <PrivateRoute exact path="/chat" component={Chat}/>
            <PrivateRoute exact path="/chat/:chatRoomId" component={ChatRoom}/>
            <Route component={PageNotFound}/>
        </Switch>
    </Router>
);
