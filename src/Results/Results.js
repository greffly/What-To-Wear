import React from 'react';
import './Results.css';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import OneResult from '../OneResult/OneResult';

const Results = props => {
  return (
    <div className='resultsPage'>
      <Header />
      <div className='myResults'>
        <h3 className='resultsHeader'>You Should Wear For... </h3>
        <OneResult />
      </div>
      <div className='addOccasionButton'>
        <Link to='/add-occasion'>
          <button type='submit' className='submitButtons' id='addAnotherButton'>
            Add Another Occasion
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Results;
