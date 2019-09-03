import React, { Component } from 'react';
import { withRouter } from 'react-router';
import config from '../config';
import OccassionsContext from '../OccasionsContext';
import './AddOccasion.css';
import Header from '../Header/Header';

//Why is this file not connecting to my backend?

class AddOccasion extends Component {
  static contextType = OccassionsContext;

  state = {
    error: null,
    showAddedMessage: false,
    files: {}
  };

  handleSubmit = e => {
    e.preventDefault();
    const { title, username, photoone, phototwo, photothree } = e.target;
    const occasion = {
      title: title.value,
      username: username.value,
      photoone: photoone.value,
      phototwo: phototwo.value,
      photothree: photothree.value
    };
    this.setState({ error: null });
    console.log(JSON.stringify(occasion));
    fetch(config.API_ENDPOINT, {
      method: 'POST',
      body: JSON.stringify(occasion),
      headers: {
        'content-type': 'application/json',
        Accept: 'application/json'
      }
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(error => Promise.reject(error));
        }
        return res.json();
      })
      // TODO this.context ??
      .then(data => {
        title.value = '';
        username.value = '';
        photoone.value = '';
        phototwo.value = '';
        photothree.value = '';
        this.context.addOccasion(data);
        this.props.history.push('/');
      })
      .catch(error => {
        console.error(error);
        this.setState({ error });
      });
  };

  render() {
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
              <input
                type='text'
                placeholder='Date Night!'
                className='addInput'
              />
            </div>
            <div className='photoUploader'>
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
                      this.setState({
                        files: {
                          ...this.state.files,
                          [e.target.id]: e.target.files[0].name
                        }
                      })
                    }
                  />
                  <label htmlFor={'files' + i} className='fileSelector'>
                    {!!this.state.files['files' + i]
                      ? this.state.files['files' + i]
                      : 'Select Photo'}
                  </label>
                </div>
              ))}
            </div>
            {/* never access the real dom from the virtual dom */}
            <button
              type='submit'
              className='submitButtons'
              id='addOccasionButton'
              onClick={e => {
                e.preventDefault();
                this.setState({ showAddedMessage: true });
                setTimeout(() => {
                  this.props.history.push('/results');
                }, 1500);
              }}
            >
              Submit
            </button>
            {this.state.showAddedMessage && (
              <div className='addedMessage'>
                <p>Added!</p>
              </div>
            )}
          </form>
        </div>
      </div>
    );
  }
}
export default withRouter(AddOccasion);
