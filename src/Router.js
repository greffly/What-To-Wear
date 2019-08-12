import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={LandingPage} />
    </Switch>
  </BrowserRouter>
);

export default Router;
