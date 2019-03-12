import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import BasePage from "../../common/BasePage";
import setBlockNumber from "../../hof/setBlockNumber";
import { goTo } from "../../services/navigation";
import { Page } from "../../common";
import { Navbar } from "../../components";
import { withAppContext } from "../../services/Providers/AppStateContext";
import WalletButtons from "./component/WalletButtons";
import WalletHeader, { WalletHeaderTestValue } from "./component/WalletHeader";
import WalletContent, {
  WalletContentTestValue
} from "./component/WalletContent";

import "./Wallet.scss";
import styles from "./styles";

class Wallet extends BasePage {
  title = 'Dashboard'

  defaults = BasePage.constants.defaults
  storage = BasePage.constants.storage

  // hof bindings
  setBlockNumber = setBlockNumber(this)

  state = {
    blockNumber: '',
    networkName: ''
  }

  componentDidMount () {
    this.setBlockNumber(
      this.props.AppContext[this.storage.ACTIVE_PROVIDER_ID],
      (value) => {
        this.props.AppContext.persist({
          [this.storage.ACTIVE_PROVIDER_BlOCKNUMBER]: String(value)
        })
        this.setState({blockNumber: String(value)})
      },
      (error) => this.setState({blockNumber: ''})
      )
  }

  renderTitleComponent = () => {
    return (
      <Typography variant="h6" color="inherit" className="Navbar--title">
        {"@dapperwallet"}
      </Typography>
    );
  }

  onClickWalletReceice = () => {
    goTo("WalletReceive");
  }

  onSend = () => {
    goTo("WalletSend");
  }

  render() {
    const { classes } = this.props;
    return (
      <Page className="Wallet">
        <Navbar
          backButton={true}
          titleComponent={this.renderTitleComponent()}
        />

        <div className={classes.content}>
          <WalletHeader
          classes={classes} {...WalletHeaderTestValue}
          networkName={this.props.AppContext[this.storage.ACTIVE_PROVIDER_NAME]}
          networkNumber={this.state.blockNumber}
          />
          <WalletContent classes={classes} {...WalletContentTestValue} />
          <WalletButtons
            classes={classes}
            onWalletReceive={this.onClickWalletReceice}
            onSend={this.onSend}
          />
        </div>
      </Page>
    );
  }
}

Wallet.propTypes = {
  AppContext: PropTypes.object.isRequired, // withAppContext
  classes: PropTypes.object.isRequired // withStyles
};

export default withStyles(styles)(withAppContext(Wallet));
