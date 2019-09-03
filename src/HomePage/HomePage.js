import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import Header from '../Header/Header';
import Occasion from '../Occasion/Occasion';
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
  // TODO make the math random equation so that it cannot repeat numbers already chosen
  render() {
    console.log(this.state.occasions);
    const contextValue = {
      occasions: this.state.occasions,
      addOccasion: this.addOccasion
    };
    const index = Math.floor(Math.random() * this.state.occasions.length);
    return (
      <div className='homePage'>
        <Header className='header' />
        <div className='userOccasion'>
          <OccasionsContext.Provider value={contextValue}>
            {this.state.occasions.length > 0 && (
              <Occasion
                key={this.state.index}
                index={this.state.index}
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
