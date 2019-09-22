//ultimately going to be looping over user occasions here, making this a single occasion component that will be imported into HomePage.
import React from 'react';
import './Occasion.css';
import OneResult from '../OneResult/OneResult';
import Photo from '../Photo/Photo';

export default function Occasion(props) {
  const { index, name, occasion, photo1, photo2, photo3 } = props || {
    index: null,
    name: '',
    occasion: '',
    photo1: 'Loading...',
    photo2: 'Loading...',
    photo3: 'Loading...'
  };
  console.log(props);

  return props.occasion ? (
    <div className='oneUserOccasion'>
      {props > -1
        ? setTimeout(
            <div>
              <OneResult
                index={props.id}
                key={props.id}
                name={props.username}
                occasion={props.occasion}
                photo1={props.photoone}
                photo2={props.phototwo}
                photo3={props.photothree}
              />
            </div>,
            1000
          )
        : console.log('props ', props.occasion)}
      <div className='userDetails'>
        <h2 className='userName'>{name}</h2>
        <h3 className='occasionName'>{occasion}</h3>
      </div>
      <div className='userPhotos'>
        <ul className='userPhotos' key={{ occasion } + { index }}>
          <Photo
            picture={photo1}
            description={name}
            key={index + 1}
            index={1}
          />
          <Photo
            picture={photo2}
            description={name}
            key={index + 2}
            index={2}
          />
          <Photo
            picture={photo3}
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
