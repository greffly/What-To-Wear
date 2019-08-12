import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = props => (
  <div className='header'>
    <h1>
      <Link to='/'>
        What <span className='to'>to</span> Wear
      </Link>
    </h1>
  </div>
);

export default Header;
