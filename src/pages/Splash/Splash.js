import React, { Component } from 'react'

import { withAppContext } from '../../services/Providers/AppStateContext'
import { IS_LOGGED,  ACTIVE_PROVIDER_ID, ACTIVE_PROVIDER_NAME } from '../../constants/storage'
import Navigation, { goTo } from '../../services/navigation';
import Storage from '../../services/storage/storage'

import './Splash.css';

class Splash extends Component {
  async componentDidMount() {
    let isMnemonicSet = await Storage.get('is_mnemonic_set')
    let isPasswordSet = await Storage.get('is_password_set')
    let isConfirmedMnemonic = await Storage.get('is_mnemonic_confirmed')

    await this._init()

console.log('setup',isMnemonicSet, isPasswordSet , isConfirmedMnemonic)
    if (isMnemonicSet) {
      if (isPasswordSet && isConfirmedMnemonic) {
        // user already logged
        this.setContext(IS_LOGGED, true)
        return goTo('Dashboard')
      }

      // not logged
      this.setContext(IS_LOGGED, false)
      return goTo('Login')

    } else {
      // not loggedin
      // must set app state to not log for updated component child
      this.setContext(IS_LOGGED, false)
      Navigation.init('GetStarted');
    }
  }

  setContext (name, value) {
    this.props.AppContext.onAppContextChange({[name]: value})
  }

  async _init() {
    // load selected network    
    this.props.AppContext.set({
      [ACTIVE_PROVIDER_ID]: await Storage.get(ACTIVE_PROVIDER_ID),
      [ACTIVE_PROVIDER_NAME]:  await Storage.get(ACTIVE_PROVIDER_NAME)
    })
  }

  render() {console.log(this.props)
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
 