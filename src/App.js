import React, { Component } from 'react';
import './App.scss';
import { NavigationDrawer } from 'react-md'
import { Route, Switch } from 'react-router-dom';
import NavLink from './pages/NavLink';

import Home from './pages/Home';
import Page1 from './pages/Page1';

const navItems = [{
  exact: true,
  label: 'Home',
  to: '/',
  icon: 'home',
}, {
  label: 'Page 1',
  to: '/page-1',
  icon: 'bookmark',
}];

export default class App extends Component {
  render() {
    return (
      <Route
        render={({ location }) => (
          <NavigationDrawer
            drawerTitle="react-md with CRA"
            toolbarTitle="Welcome to react-md"
            navItems={navItems.map(props => <NavLink {...props} key={props.to} />)}
          >
            <Switch key={location.key}>
              <Route exact path="/" location={location} component={Home} />
              <Route path="/page-1" location={location} component={Page1} />
            </Switch>
          </NavigationDrawer>
        )}
      />
    );
  }
}