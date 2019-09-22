import React, { Component } from 'react';
import { withRouter } from 'react-router';
import config from '../config';
import OccasionsContext from '../OccasionsContext';
import './AddOccasion.css';
import Header from '../Header/Header';

//Why is this file not connecting to my backend?

class AddOccasion extends Component {
  static contextType = OccasionsContext;
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      showAddedMessage: false,
      files: {}
    };
  }

  handleSubmit = e => {
    this.setState({ showAddedMessage: true });
    setTimeout(() => {
      this.props.history.push('/results');
    }, 1500);
    e.preventDefault();
    console.log('handling submit!');
    const { title, username } = e.target;
    const { photoone, phototwo, photothree } = this.state.files;
    const occasion = {
      title: title.value,
      username: username.value,
      photoone,
      phototwo,
      photothree
    };
    this.setState({ error: null });
    console.log(JSON.stringify(occasion));
    fetch(config.API_ENDPOINT, {
      method: 'POST',
      body: JSON.stringify(occasion),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(error => Promise.reject(error));
        }
        console.log(res.json());
        return res.json();
      })
      .then(occasion => {
        title.value = '';
        username.value = '';
        photoone.value = '';
        phototwo.value = '';
        photothree.value = '';
        this.context.addOccasion(occasion);
        // this.props.history.push('/');
        console.log(this.context.addOccasion(occasion));
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
          <form onSubmit={this.handleSubmit}>
            <div className='nameInput'>
              <label>Name:</label>
              <br />
              <input
                type='text'
                name='username'
                id='username'
                placeholder='Jane'
                className='addInput'
              />
              <br />
            </div>
            <div className='occasionInput'>
              <label>Occasion:</label>
              <br />
              <input
                type='text'
                name='title'
                id='title'
                placeholder='Date Night!'
                className='addInput'
              />
            </div>
            <div className='photoUploader'>
              <p className='uploadPhoto'>Upload 3 Photos</p>
              {['one', 'two', 'three'].map(i => (
                <div key={i}>
                  <input
                    type='file'
                    id={'photo' + i}
                    className='uploadPhoto'
                    accept='image/png, image/jpeg'
                    onChange={e => {
                      //TODO call the upload service with the file here, get back the url from the url service, instead of e.target.files[0].name use the path returned from the service
                      const data = new FormData();
                      data.append('image', e.target.files[0]);
                      fetch('/api/upload', {
                        method: 'POST',
                        body: data
                      })
                        .then(res => res.json())
                        .then(res => {
                          this.setState({
                            files: {
                              ...this.state.files,
                              ['photo' + i]: res.path
                            }
                          });
                        });
                      // this.setState({
                      //   files: {
                      //     ...this.state.files,
                      //     [e.target.id]: e.target.files[0].name
                      //   }
                      // });
                    }}
                  />
                  <label htmlFor={'photo' + i} className='fileSelector'>
                    {!!this.state.files['photo' + i]
                      ? 'Photo Added!'
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
