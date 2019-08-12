import React from 'react';
import Header from '../Header/Header';
import './LandingPage.css';

const LandingPage = props => {
  return (
    <div className='landingPage'>
      <Header className='header' />
      <div className='introPage'>
        <img
          src='../images/models.jpeg'
          alt='models'
          className='landingPagePhoto'
        />
        <p className='introBlurb'>
          A social sharing app for helping each other find the best possible
          outfit for the occasion.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
