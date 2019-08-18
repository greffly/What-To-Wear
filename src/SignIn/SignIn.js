import React from 'react';
import './SignIn.css';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const SignIn = props => {
  return (
    <div className='signInPage'>
      <Header className='Header' />
      <h2 className='signIn'>Sign In</h2>
      <form className='signInForm'>
        <div className='username'>
          <label>Username</label>
          <br />
          <input type='text' placeholder='username' className='signInInput' />
          <br />
        </div>
        <div className='password'>
          <label>Password</label>
          <br />
          <input type='text' placeholder='password' className='signInInput' />
          <br />
        </div>
        <Link to='/home'>
          <button type='submit' className='submitButtons'>
            Sign In
          </button>
        </Link>
      </form>
      <p className='redirectToSignUp'>
        Need an account?{' '}
        <Link to='/sign-up'>
          <span className='link'>Sign up here.</span>
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
