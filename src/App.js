import React, { Component } from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import LoginPage from './content/LoginPage';

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/home" component={LandingPage} />
        </Switch>
      </>
    );
  }
}

export default App;
