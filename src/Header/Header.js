import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = props => (
  <div className='header'>
    <h1 className='whatWear'>
      <Link to='/home'>
        <div className='whatToWear'>
          What <span className='to'>to</span> Wear
        </div>
      </Link>
    </h1>
  </div>
);

export default Header;
