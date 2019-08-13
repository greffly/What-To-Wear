import React from 'react';
import './AddOccasion.css';
import Header from '../Header/Header';

const AddOccasion = props => {
  return (
    <div className='addOccasion'>
      <Header />
      <div className='addOccasionContent'>
        <h2 className='addOccasionTitle'>Add an Occasion</h2>
        <form>
          <div className='nameInput'>
            <label>Name:</label>
            <br />
            <input type='text' placeholder='Jane' className='addInput' />
            <br />
          </div>
          <div className='occasionInput'>
            <label>Occasion:</label>
            <br />
            <input type='text' placeholder='Date Night!' className='addInput' />
          </div>
          <div className='photoUploader'>
            <p className='uploadPhoto'>Upload 3 Photos</p>
            <input
              type='text'
              placeholder='upload photo here'
              className='uploadPhoto'
            />
            <input
              type='text'
              placeholder='upload photo here'
              className='uploadPhoto'
            />
            <input
              type='text'
              placeholder='upload photo here'
              className='uploadPhoto'
            />
          </div>
          <button type='submit' className='submitButtons'>
            Sumbit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddOccasion;
