//ultimately going to be looping over user occasions here, making this a single occasion component that will be imported into HomePage.
import React, { Component } from 'react';
import './Occasion.css';
import Photo from '../Photo/Photo';

export default function Occasion(props) {
  // state = {
  //   occasions: []
  // };
  // setOccassion(occasions) {
  //   this.setState({
  //     occasions
  //   });
  // }
  // componentDidMount() {
  //   this.setState(sampleOccasions);
  // }
  // addOccasion = occasionName => {
  //   this.setState({
  //     occasions: [...sampleOccasions.occasions, occasionName]
  //   });
  // };

  //TODO loop over all of this so that every card is displayed not just [0]
  const { name, occasion, photo1, photo2, photo3 } = props.occasion || {
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
        <ul className='userPhotos'>
          <Photo picture={photo1} description={name} />
          <Photo picture={photo2} description={name} />
          <Photo picture={photo3} description={name} />
        </ul>
      </div>
    </div>
  ) : (
    ''
  );
}
