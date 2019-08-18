import React, { useState } from 'react';
import { withRouter } from 'react-router';
import './AddOccasion.css';
import Header from '../Header/Header';

const AddOccasion = props => {
  const [showAddedMessage, setShowAddedMessage] = useState(false);
  const [files, setFiles] = useState({});
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
            {/* TODO change Select Photo to Photo Selected on upload event */}
            {/* TODO add error message for incorrect file type */}
            <p className='uploadPhoto'>Upload 3 Photos</p>
            {[1, 2, 3].map(i => (
              <div key={i}>
                <input
                  type='file'
                  id={'files' + i}
                  className='uploadPhoto'
                  accept='image/png, image/jpeg'
                  onChange={e =>
                    setFiles({
                      ...files,
                      [e.target.id]: e.target.files[0].name
                    })
                  }
                />
                <label htmlFor={'files' + i} className='fileSelector'>
                  {!!files['files' + i] ? files['files' + i] : 'Select Photo'}
                </label>
              </div>
            ))}
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
            Submit
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
