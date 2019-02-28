import React, { Component } from 'react';
import Navigation, { goTo } from '../../services/navigation';
import Storage from '../../services/storage/storage'

import './Splash.css';

class Splash extends Component {
  async componentDidMount() {
    let isMnemonicSet = await Storage.get('is_mnemonic_set')
    let isPasswordSet = await Storage.get('is_password_set')
    let isConfirmedMnemonic = await Storage.get('is_mnemonic_confirmed')

    if (isMnemonicSet) {
      if (isPasswordSet && isConfirmedMnemonic) {
        return goTo('Login')
      }

      return goTo('Dashboard')
    } else {
      Navigation.init('GetStarted');
    }
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
