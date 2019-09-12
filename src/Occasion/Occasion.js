//ultimately going to be looping over user occasions here, making this a single occasion component that will be imported into HomePage.
import React from 'react';
import './Occasion.css';
import Photo from '../Photo/Photo';

export default function Occasion(props) {
  const { index, name, occasion, photoone, phototwo, photothree } = props || {
    index: null,
    name: '',
    occasion: '',
    photoone: 'Loading...',
    phototwo: 'Loading...',
    photothree: 'Loading...'
  };
  console.log(props);

  return props.occasion ? (
    <div className='oneUserOccasion'>
      <div className='userDetails'>
        <h2 className='userName'>{name}</h2>
        <h3 className='occasionName'>{occasion}</h3>
      </div>
      <div className='userPhotos'>
        <ul className='userPhotos' key={{ occasion } + { index }}>
          <Photo
            picture={photoone}
            description={name}
            key={index + 1}
            index={1}
          />
          <Photo
            picture={phototwo}
            description={name}
            key={index + 2}
            index={2}
          />
          <Photo
            picture={photothree}
            description={name}
            key={index + 3}
            index={3}
          />
        </ul>
      </div>
    </div>
  ) : (
    ''
  );
}
