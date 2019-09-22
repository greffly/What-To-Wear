import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './OneResult.css';
import config from '../config';
import OccasionsContext from '../OccasionsContext';
import PieChart from '../PieChart/PieChart';

//Will need to import from PieChart.js eventually
class OneResult extends Component {
  static contextType = OccasionsContext;

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      showDeletedMessage: false
    };
  }

  deleteOccasionRequest(occasionId, cb) {
    const myResult = {
      occasionId: 4,
      title: 'Going to a Gala',
      username: 'Casey',
      photoone: 'photoOne',
      phototwo: 'phototwo',
      photothree: 'photothree'
    };
    console.log(myResult.occasionId);
    fetch(config.API_ENDPOINT + `/${myResult.occasionId}`, {
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
  //TODO navigate to addAnOccasion from deleteMyOccasion button, this.props currently empty object
  handleSubmit(e) {
    this.setState({ showDeletedMessage: true });
    setTimeout(() => {
      console.log(this.props.history);
    }, 1500);
  }

  render() {
    return (
      <OccasionsContext.Consumer>
        {context => (
          <div className='oneResult'>
            {console.log(context.occasions)}
            <h4 className='occasionResult'>Your {this.props.occasion}</h4>
            <PieChart />
            <div className='editAndDelete'>
              <Link to='/edit-occasion'>
                <button className='editButton'>Edit this Occasion</button>
              </Link>
              <button
                className='deleteButton'
                onClick={() => {
                  console.log(context);
                  this.deleteOccasionRequest(
                    this.props.id,
                    context.deleteOccasion
                  );
                  this.handleSubmit();
                  context.history.push('/add-occasion');
                }}
              >
                Delete this Occasion
              </button>
            </div>
            {this.state.showDeletedMessage && (
              <div className='deletedMessage'>
                <p>Deleted!</p>
              </div>
            )}
          </div>
        )}
      </OccasionsContext.Consumer>
    );
  }
}

export default OneResult;
// OneResult.defaultProps = {
//   onClickDelete: () => {}
// };
