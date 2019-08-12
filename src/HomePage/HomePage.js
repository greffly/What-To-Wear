import React from 'react';
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
    </div>
  );
};

export default HomePage;
