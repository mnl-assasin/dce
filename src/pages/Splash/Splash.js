import React, { Component } from 'react'

import { withAppContext, IS_LOOGED } from '../../services/Prividers/AppStateContext'
import Navigation, { goTo } from '../../services/navigation';
import Storage from '../../services/storage/storage'

import './Splash.css';

class Splash extends Component {
  async componentDidMount() {
    let isMnemonicSet = await Storage.get('is_mnemonic_set')
    let isPasswordSet = await Storage.get('is_password_set')
    let isConfirmedMnemonic = await Storage.get('is_mnemonic_confirmed')
    
console.log('setup',isMnemonicSet, isPasswordSet , isConfirmedMnemonic)
    if (isMnemonicSet) {
      if (isPasswordSet && isConfirmedMnemonic) {
        // user already logged
        this.setContext(IS_LOOGED, true)
        return goTo('Dashboard')
      }

      // not logged
      this.setContext(IS_LOOGED, false)
      return goTo('Login')

    } else {
      // not loggedin
      // must set app state to not log for updated component child
      this.setContext(IS_LOOGED, false)
      Navigation.init('GetStarted');
    }
  }

  setContext (name, value) {
    this.props.AppContext.onAppContextChange({[name]: value})
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

export default withAppContext(Splash);
 