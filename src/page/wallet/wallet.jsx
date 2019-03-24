import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'

import BasePage from '../../common/BasePage'
import { Page } from '../../layout'
import { setBlockNumber, setEtherPrice, setBalance } from '../../hof'
import { goTo } from '../../services/navigation'
import { convertedPricePerValue } from '../../helper/computation'
import { withAppContext } from '../../services/Providers/AppStateContext'
import WalletButtons from './component/WalletButtons'
import WalletHeader, { WalletHeaderTestValue } from './component/WalletHeader'
import WalletContent, {
  WalletContentTestValue,
} from './component/WalletContent'

import componentDidMount from './method/_componentDidMount'
import styles from './styles'

class Wallet extends BasePage {
  title = 'Wallet'
  defaults = BasePage.constants.defaults
  storage = BasePage.constants.storage
  route = BasePage.constants.route

  navigate = goTo

  navigationProps = {
    backButton: true,
    title: '',
  }

  // hof bindings
  setBlockNumber = setBlockNumber(this)
  setEtherPrice = setEtherPrice(this)
  setBalance = setBalance(this)
  componentDidMount = componentDidMount(this)

  state = {
    blockNumber: '',
    networkName: '',
    amount: '',
  }

  onClickWalletReceice = () => this.navigate(this.route.WALLET_RECEIVE)

  onSend = () => this.navigate(this.route.WALLET_SEND)
  onHistory = () => this.navigate(this.route.WALLET_HISTORY)

  render() {
    const { amount } = this.state
    const { classes } = this.props
    console.log(this.props)
    return (
      <Page navigationProps={this.navigationProps}>
        <WalletHeader
          classes={classes}
          networkName={this.props.AppContext[this.storage.ACTIVE_PROVIDER_NAME]}
          networkNumber={this.state.blockNumber}
          coinPrice={this.props.AppContext[this.storage.ETHER_PRICE]}
          userName={this.props[this.storage.WALLET_USERNAME]}
          coinBase={this.props[this.storage.WALLET_COINBASE]}
        />
        <WalletContent
          classes={classes}
          {...WalletContentTestValue}
          amount={this.props[this.storage.WALLET_AMOUNT]}
          value={convertedPricePerValue(
            this.props.AppContext[this.storage.ETHER_PRICE],
            this.props[this.storage.WALLET_AMOUNT]
          )}
        />
        <WalletButtons
          classes={classes}
          onWalletReceive={this.onClickWalletReceice}
          onSend={this.onSend}
          onHistory={this.onHistory}
        />
      </Page>
    )
  }
}

Wallet.propTypes = {
  AppContext: PropTypes.object.isRequired, // withAppContext
  classes: PropTypes.object.isRequired, // withStyles
}

export default withStyles(styles)(withAppContext(Wallet))
