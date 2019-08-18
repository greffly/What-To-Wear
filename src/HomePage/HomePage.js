import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import Header from '../Header/Header';
import Occasion from '../Occasion/Occasion';
import sampleOccasions from '../store';

//Id like to style the buttons on this page differently
//TODO images not loading onto github page, but load on local host. Why?
export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      occasions: []
    };
  }
  setOccassion(occasions) {
    this.setState({
      occasions
    });
  }
  setOccasionIndex(index) {
    this.setState({
      index
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
  // TODO make the math random equation so that it cannot repeat numbers already chosen
  render() {
    const index = Math.floor(Math.random() * this.state.occasions.length);
    return (
      <div className='homePage'>
        <Header className='header' />
        <div className='userOccasion'>
          {this.state.occasions.length > 0 && (
            <Occasion
              key={this.state.index}
              index={this.state.index}
              name={this.state.occasions[index].name}
              occasion={this.state.occasions[index].occasion}
              photo1={this.state.occasions[index].photo1}
              photo2={this.state.occasions[index].photo2}
              photo3={this.state.occasions[index].photo3}
            />
          )}
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
