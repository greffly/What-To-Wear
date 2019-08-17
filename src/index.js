import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Router from './Router';

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Router />
  </BrowserRouter>,
  document.getElementById('root')
);
