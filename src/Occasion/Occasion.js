//ultimately going to be looping over user occasions here, making this a single occasion component that will be imported into HomePage.
import React, { Component } from 'react';
import './Occasion.css';
import Photo from '../Photo/Photo';

export default function Occasion(props) {
  //TODO loop over all of this so that every card is displayed not just [0]
  const { key, name, occasion, photo1, photo2, photo3 } = props.occasions || {
    key: '',
    name: '',
    occasion: '',
    photo1: 'Loading...',
    photo2: 'Loading...',
    photo: 'Loading...'
  };

  return props.occasion ? (
    <div className='oneUserOccasion'>
      <div className='userDetails'>
        <h2 className='userName'>{name}</h2>
        <h3 className='occasionName'>{occasion}</h3>
      </div>
      <div className='userPhotos'>
        <ul className='userPhotos' key={key}>
          <Photo picture={photo1} description={name} key={key} />
          <Photo picture={photo2} description={name} key={key} />
          <Photo picture={photo3} description={name} key={key} />
        </ul>
      </div>
    </div>
  ) : (
    ''
  );
}
