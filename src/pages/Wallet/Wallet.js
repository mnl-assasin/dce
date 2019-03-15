import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles"

import BasePage from "../../common/BasePage";
import Page from '../../layout/Page'
import setBlockNumber from "../../hof/setBlockNumber";
import { goTo } from "../../services/navigation";
import { withAppContext } from "../../services/Providers/AppStateContext";
import WalletButtons from "./component/WalletButtons";
import WalletHeader, { WalletHeaderTestValue } from "./component/WalletHeader";
import WalletContent, { WalletContentTestValue } from "./component/WalletContent";

import componentDidMount from "./method/_componentDidMount";
import styles from "./styles"

class Wallet extends BasePage {
  title = 'Wallet'
  defaults = BasePage.constants.defaults
  storage = BasePage.constants.storage
  route = BasePage.constants.route

  navigate = goTo

  navigationProps = {
    backButton: true,
    title: ''
  }

  // hof bindings
  setBlockNumber = setBlockNumber(this)
  componentDidMount = componentDidMount(this)

  state = {
    blockNumber: '',
    networkName: ''
  }

  onClickWalletReceice = () => this.navigate(this.route.WALLET_RECEIVE)

  onSend = () => this.navigate(this.route.WALLET_SEND)

  render () {
    const { classes } = this.props

    return (
      <Page navigationProps={this.navigationProps}>
        <WalletHeader
          classes={classes} {...WalletHeaderTestValue}
          networkName={this.props.AppContext[this.storage.ACTIVE_PROVIDER_NAME]}
          networkNumber={this.state.blockNumber}
        />
        <WalletContent
          classes={classes}
          {...WalletContentTestValue}
        />
        <WalletButtons
          classes={classes}
          onWalletReceive={this.onClickWalletReceice}
          onSend={this.onSend}
        />
      </Page>
    );
  }
}

Wallet.propTypes = {
  AppContext: PropTypes.object.isRequired, // withAppContext
  classes: PropTypes.object.isRequired // withStyles
};

export default withStyles(styles)(withAppContext(Wallet));
