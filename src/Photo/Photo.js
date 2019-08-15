import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './Photo.css';

class Photo extends Component {
  state = {
    showWearIt: false
  };
  render() {
    // console.log(this.props);
    return (
      <li className='photoBox' key={this.props.key}>
        <div className='wrapper'>
          <img
            src={this.props.picture}
            alt={this.props.description}
            className='photo'
          />
        </div>
        <button
          type='submit'
          className='wearThis'
          onClick={e => {
            e.preventDefault();
            this.setState({ showWearIt: true });
            setTimeout(() => {
              this.props.history.push('/home');
              this.setState({ showWearIt: false });
              window.scrollTo(0, 0);
            }, 1500);
          }}
        >
          Wear This!
        </button>
        {this.state.showWearIt && (
          <div className='selectWearIt'>
            <p>Yassss Wear It!</p>
          </div>
        )}
      </li>
    );
  }
}

export default withRouter(Photo);
