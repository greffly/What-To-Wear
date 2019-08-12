import React from 'react';
import './Photo.css';

const Photo = props => {
  return (
    <div className='photoBox'>
      <p className='photo'>Photo</p>
      <button type='submit' className='wearThis'>
        Wear This!
      </button>
    </div>
  );
};

export default Photo;
