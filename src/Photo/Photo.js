import React from 'react';
import './Photo.css';

const Photo = props => {
  return (
    <div className='photoBox'>
      <div className='wrapper'>
        <img src='/images/nike1.jpg' alt='nike outfit' className='photo' />
      </div>
      <button type='submit' className='wearThis'>
        Wear This!
      </button>
    </div>
  );
};

export default Photo;
