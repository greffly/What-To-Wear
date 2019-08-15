import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import Header from '../Header/Header';
import Occasion from '../Occasion/Occasion';
import sampleOccasions from '../store';

//Id like to style the buttons on this page differently
export default class HomePage extends Component {
  state = {
    occasions: []
  };
  setOccassion(occasions) {
    this.setState({
      occasions
    });
  }
  componentDidMount() {
    this.setState(sampleOccasions);
  }
  addOccasion = occasionName => {
    this.setState({
      occasions: [...sampleOccasions.occasions, occasionName]
    });
  };
  render() {
    return (
      <div className='homePage'>
        <Header className='header' />
        <div className='userOccasion'>
          {/* TODO .map here */}
          {Object.values(this.state.occasions).map((occasion, index) => (
            <Occasion
              key={index}
              name={this.state.occasions[index].name}
              occasion={this.state.occasions[index].occasion}
              photo1={this.state.occasions[index].photo1}
              photo2={this.state.occasions[index].photo2}
              photo3={this.state.occasions[index].photo3}
            />
          ))}
        </div>
        <div className='addResultsLink'>
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
