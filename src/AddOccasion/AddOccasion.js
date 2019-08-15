import React, { useState } from 'react';
import { withRouter } from 'react-router';
import './AddOccasion.css';
import Header from '../Header/Header';

const AddOccasion = props => {
  const [showAddedMessage, setShowAddedMessage] = useState(false);
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
          {/* never access the real dom from the virtual dom */}
          <button
            type='submit'
            className='submitButtons'
            onClick={e => {
              e.preventDefault();
              setShowAddedMessage(true);
              setTimeout(() => {
                props.history.push('/results');
              }, 1500);
            }}
          >
            Sumbit
          </button>
          {showAddedMessage && (
            <div className='addedMessage'>
              <p>Added!</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default withRouter(AddOccasion);
