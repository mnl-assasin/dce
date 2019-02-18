import React, { Component } from 'react';
import Navigation from '../../services/navigation';

import './Splash.css';

class Splash extends Component {
  componentDidMount() {
    // setTimeout( () => {
      Navigation.init('GetStarted');
    // }, 2000)
  }

  render() {
    return (
      <div className="Splash">
        <div className="Content">
          Splash Page
        </div>
      </div>
    );
  }
}

export default Splash;
