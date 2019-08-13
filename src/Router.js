import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import HomePage from './HomePage/HomePage';
import AddOccasion from './AddOccasion/AddOccasion';
import Results from './Results/Results';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/sign-in' component={SignIn} />
      <Route exact path='/sign-up' component={SignUp} />
      <Route exact path='/home' component={HomePage} />
      <Route exact path='/add-occasion' component={AddOccasion} />
      <Route exact path='/results' component={Results} />
    </Switch>
  </BrowserRouter>
);

export default Router;
