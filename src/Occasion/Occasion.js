//ultimately going to be looping over user occasions here, making this a single occasion component that will be imported into HomePage.
import React from 'react';
import './Occasion.css';
import Photo from '../Photo/Photo';

export default function Occasion(props) {
  const { index, name, occasion, photo1, photo2, photo3 } = props || {
    index: null,
    name: '',
    occasion: '',
    photo1: 'Loading...',
    photo2: 'Loading...',
    photo: 'Loading...'
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
          <Photo picture={photo1} description={name} key={index} />
          <Photo picture={photo2} description={name} key={index} />
          <Photo picture={photo3} description={name} key={index} />
        </ul>
      </div>
    </div>
  ) : (
    ''
  );
}
