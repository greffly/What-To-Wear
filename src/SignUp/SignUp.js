import React from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const SignUp = props => {
  return (
    <div className='signUpPage'>
      <Header className='Header' />
      <h2 className='signUp'>Sign Up</h2>
      <form className='signUpForm'>
        <div className='username'>
          <label>Enter Username</label>
          <br />
          <input type='text' placeholder='username' className='signUpInput' />
          <br />
        </div>
        <div className='password'>
          <label>Password</label>
          <br />
          <input type='text' placeholder='password' className='signUpInput' />
          <br />
        </div>
        <div className='password'>
          <label>Re-Enter Password</label>
          <br />
          <input type='text' placeholder='password' className='signUpInput' />
          <br />
        </div>
        <Link to='/home'>
          <button type='submit' className='submitButtons'>
            Sign Up
          </button>
        </Link>
      </form>
      <p className='redirectToSignIn'>
        Already have an account?{' '}
        <Link to='/sign-in'>
          <span className='link'>Sign in here.</span>
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
