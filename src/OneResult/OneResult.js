import React from 'react';
import { Link } from 'react-router-dom';
import './OneResult.css';
import config from '../config';
import OccasionsContext from '../OccasionsContext';
import PieChart from '../PieChart/PieChart';

//Will need to import from PieChart.js eventually
function deleteOccasionRequest(occasionId, cb) {
  //TODO I need to figure out here how to set endpoints for occasions. In my home screen or add occasion I don't have an endpoint, but I need it for delete. How best to implement?
  console.log(occasionId);
  fetch(config.API_ENDPOINT + `/${occasionId}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(res => {
      if (!res.ok) {
        return res.json().then(error => {
          throw error;
        });
      }
      return res.json();
    })
    .then(data => {
      console.log({ data });
      cb(occasionId);
    })
    .catch(error => {
      console.log(error);
    });
}

export default props => {
  return (
    <OccasionsContext.Consumer>
      {context => (
        <div className='oneResult'>
          {console.log(context)}
          <h4 className='occasionResult'>Your {context.title}!</h4>
          <PieChart />
          <div className='editAndDelete'>
            <Link to='/edit-occasion'>
              <button className='editButton'>Edit this Occasion</button>
            </Link>
            <button
              className='deleteButton'
              onClick={() => {
                console.log(context);
                deleteOccasionRequest(props.id, context.deleteOccasion);
              }}
            >
              Delete this Occasion
            </button>
          </div>
        </div>
      )}
    </OccasionsContext.Consumer>
  );
};

// OneResult.defaultProps = {
//   onClickDelete: () => {}
// };
