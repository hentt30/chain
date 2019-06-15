import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { renderRoutes } from '../imports/routes.jsx';
import { App } from '../imports/ui/App.jsx';

Tracker.autorun(() => {
  Meteor.subscribe('messages');
});

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('react-target'));
});
