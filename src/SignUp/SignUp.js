import React from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const SignUp = props => {
  return (
    <div className='signUpPage'>
      <Header className='Header' />
      <h2 class='signUp'>Sign Up</h2>
      <form className='signUpForm'>
        <div className='username'>
          <label>Enter Username</label>
          <br />
          <input type='text' placeholder='username' />
          <br />
        </div>
        <div className='password'>
          <label>Password</label>
          <br />
          <input type='text' placeholder='password' />
          <br />
        </div>
        <div className='password'>
          <label>Re-Enter Password</label>
          <br />
          <input type='text' placeholder='password' />
          <br />
        </div>
        <Link to='/home'>
          <button type='submit' className='signUpInButtons'>
            Sign Up!
          </button>
        </Link>
      </form>
      <p class='redirectToSignIn'>
        Already have an account?{' '}
        <Link to='/sign-in'>
          <span className='link'>Sign in here.</span>
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
