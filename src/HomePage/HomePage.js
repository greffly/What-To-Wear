import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import Header from '../Header/Header';
import Occasion from '../Occasion/Occasion';
import AddOccasion from '../AddOccasion/AddOccasion';
import OccasionsContext from '../OccasionsContext';
import config from '../config';

//Id like to style the buttons on this page differently
export default class HomePage extends Component {
  state = {
    occasions: [],
    error: null
  };
  setOccasions = occasions => {
    this.setState({
      occasions,
      error: null
    });
  };
  //TODO do I need this?
  // setOccasionIndex = id => {
  //   this.setState({
  //     id
  //   });
  // };
  addOccasion = occasion => {
    this.setState({
      occasions: [...this.state.occasions, occasion]
    });
  };
  deleteOccasion = occasionId => {
    console.log(occasionId);
    const newOccasions = this.state.occasions.filter(
      oc => oc.id !== occasionId
    );
    this.setState({
      occasions: newOccasions
    });
  };
  componentDidMount() {
    fetch(config.API_ENDPOINT, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(error => Promise.reject(error));
        }
        return res.json();
      })
      .then(this.setOccasions)
      .catch(error => {
        console.error(error);
        this.setState({ error });
      });
  }

  render() {
    const contextValue = {
      occasions: this.state.occasions,
      addOccasion: this.addOccasion
    };
    console.log(this.state.occasions);
    const index = Math.floor(Math.random() * this.state.occasions.length);
    console.log('the index is:', index + 1);
    // TODO store index in local storage so it won't repeat itself
    const viewedOccasions =
      localStorage.getItem('viewedOccasions') !== null
        ? JSON.parse(localStorage.getItem('viewedOccasions'))
        : [];
    const currentIndex = index + 1;
    setTimeout(() => {
      if (currentIndex === this.state.occasions[index].id) {
        viewedOccasions.push(currentIndex);
        console.log('setting local storage');
        console.log(currentIndex);
        localStorage.setItem(
          'viewedOccasions',
          JSON.stringify(viewedOccasions)
        );
        console.log(viewedOccasions);
      }
    }, 1000);
    //TODO don't map over viewedOccasions
    //use index of from viewedOccasions, if it's -1, good to go

    return (
      <div className='homePage'>
        <Header className='header' />
        <div className='userOccasion'>
          <OccasionsContext.Provider value={contextValue}>
            {this.state.occasions.length === 0
              ? setTimeout(<AddOccasion />, 1000)
              : null}
            {this.state.occasions.length > 0 && (
              <Occasion
                index={this.state.occasions[index].id}
                key={this.state.occasions[index].id}
                name={this.state.occasions[index].username}
                occasion={this.state.occasions[index].title}
                photo1={this.state.occasions[index].photoone}
                photo2={this.state.occasions[index].phototwo}
                photo3={this.state.occasions[index].photothree}
              />
            )}
          </OccasionsContext.Provider>
        </div>
        <div className='addResultsLink'>
          {/* TODO Change these buttons to responsive icons */}
          <Link to='/add-occasion'>
            <p className='addButton1'>Add an Occasion</p>
          </Link>
          <Link to='/results'>
            <p className='addButton2'>See my Occasions</p>
          </Link>
        </div>
      </div>
    );
  }
}
