import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = props => {
  return (
    <div className='landingPage'>
      <h1 className='whatWearLanding'>
        <Link to='/home'>
          <div className='whatToWearLanding'>
            What <span className='toLanding'>to</span> Wear
          </div>
        </Link>
      </h1>
      <div className='introPage'>
        {/* <img src='/images/models.jpg' alt='models' className='landingPhoto' /> */}
        {/* <p className='landingPhoto'>Landing Photo Placeholder</p> */}
        <p className='introBlurb'>
          A social sharing app for helping people find the best possible outfit
          for the occasion.
        </p>
      </div>
      <div className='signButtons'>
        <Link to='/sign-in'>
          <button type='submit' className='submitButtons'>
            Sign In
          </button>
        </Link>
        <Link to='/sign-up'>
          <button type='submit' className='submitButtons'>
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
