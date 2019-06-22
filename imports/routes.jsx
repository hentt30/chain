import React from 'react';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory as createHistory } from 'history';
// route components
import Home from './ui/Home.jsx';
import SignUp from './ui/user/SignUp.jsx';
import SignUpSubjects from './ui/user/subjects/SignUpSubjects.jsx';
import Chat from './ui/chat/Chat.jsx';
import ChatRoom from './ui/chat/ChatRoom.jsx';
import PageNotFound from './ui/PageNotFound.jsx';
import PublicRoute from "./ui/PublicRoute";
import PrivateRoute from "./ui/PrivateRoute";

const browserHistory = createHistory();

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Switch>
            <PublicRoute exact path="/" component={Home}/>
            <PublicRoute exact path="/signup" component={SignUp}/>
            <PrivateRoute exact path="/signup-subjects" component={SignUpSubjects}/>
            <PrivateRoute exact path="/chat" component={Chat}/>
            <PrivateRoute exact path="/chat/:chatRoomId" component={ChatRoom}/>
            <Route component={PageNotFound}/>
        </Switch>
    </Router>
);
