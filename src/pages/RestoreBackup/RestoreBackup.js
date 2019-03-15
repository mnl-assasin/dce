import React from 'react'
import PropTypes from "prop-types"
import { Wallet } from 'dapper-js'

import { withStyles } from "@material-ui/styles"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Typography from '@material-ui/core/Typography'

import BasePage from "../../common/BasePage"
import Page from '../../layout/Page'
import { Col } from "../../common"
import { goTo } from '../../services/navigation'
import { alertDialog } from '../../components'
import { inputTypes } from "../../constants/types"
import { withAppContext } from "../../services/Providers/AppStateContext"

import styles from "./styles"
import './RestoreBackup.css'

class RestoreBackup extends BasePage {
  title = 'RestoreBackup'
  defaults = BasePage.constants.defaults
  storage = BasePage.constants.storage

  navigationProps = {
    backButton: true
  }

  state = {
    phrase: ''
  }

  onClickSubmit = async () => {
    let wallet
    try {
      wallet = await Wallet.ethers.restore({mnemonic: this.state.phrase})
      if (wallet.code === 200) {
        this.props.AppContext.persist({
          [this.storage.WALLET_MNEMONIC]: wallet.data.mnemonic,
          [this.storage.WALLET_ADDRESS]: wallet.data.address,
          [this.storage.WALLET_PRIVATE_KEY]: wallet.data.privateKey,
          [this.storage.WALLET_PUBLIC_KEY]: wallet.data.publicKey
        })
        // redir
        goTo('NominatePassword', wallet)

      } else {
        throw new Error('no valid wallet data')
      }
    } catch(e) {
      console.log('error in restoring backup', e)
      alertDialog({
        title: 'Oopss',
        message: 'It seems like you have entered a wrong mnemonic phrase. please try again'
      })
    }

  }

  onHandlePhraseValue = async (e) => {
    this.setState({
      phrase: e.target.value
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <Page
        navigationProps={this.navigationProps}
      >
        <div className={classes.logo}>
          <Typography variant="h5">Welcome back and logo</Typography>
        </div>
        <Col flex="1">
          <TextField
            label="Enter backup phrase"
            margin="normal"
            variant="outlined"
            className={classes.textField}
            value={this.state.phrase}
            onChange={this.onHandlePhraseValue}
            type={inputTypes.text}
          />
          <div className={classes.buttonHolder}>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              onClick={this.onClickSubmit}
            >
              Submit
            </Button>
          </div>
        </Col>
      </Page>
    );
  }
}

RestoreBackup.propTypes = {
  AppContext: PropTypes.object.isRequired, // withAppContext
  classes: PropTypes.object.isRequired // withStyles
}

export default withStyles(styles)(withAppContext(RestoreBackup))
