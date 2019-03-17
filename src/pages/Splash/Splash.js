import React from 'react'

import BasePage from "../../common/BasePage"
import setBlockNumber from "../../hof/setBlockNumber"
import Navigation, { goTo } from '../../services/navigation'
import { withAppContext } from '../../services/Providers/AppStateContext'

import './Splash.css';

class Splash extends BasePage {
  title = "Splash"
  store = BasePage.store
  defaults = BasePage.constants.defaults
  storage = BasePage.constants.storage

  setBlockNumber = setBlockNumber(this)

  async componentDidMount() {
    return null
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

      if (this.defaults.forceDefaultRouteName) {
        return goTo(this.defaults.forceDefaultRouteName)
      }

      Navigation.init(this.defaults.defaultRouteName);
    }
  }

  setContext (name, value) {
    this.props.AppContext.onAppContextChange({[name]: value})
  }

  //
  // this list will be load from storage and cache in app global state
  // for safety we will put it here 1 by 1
  //
  startLoadArray = [
    // load session
    this.storage.IS_LOGGED,
    this.storage.IS_SET_MNEMONIC,
    this.storage.WALLET_MNEMONIC,
    this.storage.WALLET_ADDRESS,
    this.storage.WALLET_PRIVATE_KEY,
    this.storage.WALLET_PUBLIC_KEY,

    // load selected network
    this.storage.ACTIVE_PROVIDER_ID,
    this.storage.ACTIVE_PROVIDER_NAME,
    this.storage.ACTIVE_PROVIDER_BlOCKNUMBER
  ]

  _init = async () => {
    let willSaveInState = {}

    await Promise.all(
      this.startLoadArray.map(async (key) => {
             willSaveInState[key] = await this.store.get(key) || this.defaults.getDefault(key)
          })
    )
    this.props.AppContext.set(willSaveInState)

    // this will execute hof
    // this will ensure block number will refresh every app start
    await this.setBlockNumber(
      willSaveInState[this.storage.ACTIVE_PROVIDER_ID],
      (value) => this.props.AppContext.persist({
          [BasePage.constants.storage.ACTIVE_PROVIDER_BlOCKNUMBER]: String(value)
        }),
      (error) => this.setState({blockNumber: ''})
    )
  }

  render() {
    return (
      <div className="Splash">
        <div className="Content">
          <span>Loading...</span>
        </div>
      </div>
    );
  }
}

export default withAppContext(Splash);
