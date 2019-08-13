import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import Header from '../Header/Header';
import Photo from '../Photo/Photo';

const HomePage = props => {
  return (
    <div className='homePage'>
      <Header className='header' />
      <div className='userOccasion'>
        <div className='userDetails'>
          <h2 className='userName'>Jennifer</h2>
          <h3 className='occasionName'>Interview at Nike</h3>
        </div>
        <div className='userPhotos'>
          <Photo />
          <Photo />
          <Photo />
        </div>
      </div>
      <div className='addResultsLink'>
        <Link to='/add-occasion'>
          <p className='addButton1'>Add an Occasion</p>
        </Link>
        <Link to='/results'>
          <p className='addButton2'>See my Occasions</p>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
