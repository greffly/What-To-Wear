import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import LandingPage from './LandingPage/LandingPage';
import store from './store';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <LandingPage />
      </div>
    );
  }
}
