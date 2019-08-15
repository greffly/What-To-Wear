import React from 'react';
import './OneResult.css';
import PieChart from '../PieChart/PieChart';

//Will need to import from PieChart.js eventually

const OneResult = props => {
  return (
    <div className='oneResult'>
      <h4 className='occasionResult'>Your Girls Night Out!</h4>
      <PieChart />
    </div>
  );
};

export default OneResult;
