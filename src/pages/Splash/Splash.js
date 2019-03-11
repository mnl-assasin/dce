import React from 'react'

import BasePage from "../../common/BasePage"
import Navigation, { goTo } from '../../services/navigation'
import { withAppContext } from '../../services/Providers/AppStateContext'

import './Splash.css';

class Splash extends BasePage {
  title = "Splash"
  store = BasePage.store
  defaults = BasePage.constants.defaults
  storage = BasePage.constants.storage

  async componentDidMount() {
    // load session into react memory
    await this._init()
    
    let isLogged = await this.store.get('isLogged')
    let isMnemonicSet = await this.store.get('is_mnemonic_set')
    let isPasswordSet = await this.store.get('is_password_set')
    let isConfirmedMnemonic = await this.store.get('is_mnemonic_confirmed')

    if (isLogged) {
      return goTo('Dashboard')
    }

    if (isMnemonicSet) {
      if (isPasswordSet && isConfirmedMnemonic) {
        // user already logged
        this.setContext(this.storage.IS_LOGGED, true)
        return goTo('Dashboard')
      }

      // not logged
      this.setContext(this.storage.IS_LOGGED, false)
      return goTo('Login')

    } else {
      // not loggedin
      // must set app state to not log for updated component child
      this.setContext(this.storage.IS_LOGGED, false)
      Navigation.init('GetStarted');
    }
  }

  setContext (name, value) {
    this.props.AppContext.onAppContextChange({[name]: value})
  }

  async _init() {
    // load selected network    
    const activeProviderId = await this.store.get(this.storage.ACTIVE_PROVIDER_ID)
    const activeProviderName = await this.store.get(this.storage.ACTIVE_PROVIDER_NAME)

    // mnemonic
    const isSetMnemonic = await this.store.get(this.storage.IS_SET_MNEMONIC)

    // session
    const isLogged = await this.store.get(this.storage.IS_LOGGED)

    // initiate all app setup on app global state;
    // this will ensure fastest rendering than loading storage in every check for values
    // like how cache works vs not using it
    this.props.AppContext.set({
      [this.storage.ACTIVE_PROVIDER_ID]: activeProviderId || this.defaults.activeProvider.ACTIVE_PROVIDER_ID,
      [this.storage.ACTIVE_PROVIDER_NAME]: activeProviderName || this.defaults.activeProvider.ACTIVE_PROVIDER_NAME,
      [this.storage.IS_SET_MNEMONIC]: isSetMnemonic || false,
      [this.storage.IS_LOGGED]: isLogged || false,
    })
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
 