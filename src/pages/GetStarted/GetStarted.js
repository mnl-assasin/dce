import React from 'react'
import PropTypes from "prop-types"

import { withStyles } from "@material-ui/styles"
import Button from "@material-ui/core/Button"
import Typography from '@material-ui/core/Typography'

import BasePage from "../../common/BasePage";
import { goTo } from '../../services/navigation'
import { Page } from '../../common'
import { Navbar } from '../../components'

import styles from "./styles"

class GetStarted extends BasePage {
  title = "Getting Started"
  _onGetStarted = () => goTo('MnemonicPhrase')

  _onRestoreBackup = () => goTo('RestoreBackup')

  render () {
    const { classes } = this.props

    return (
      <Page>
        <Navbar title={this.title} />
        <div className={classes.container}>
          <div className={classes.logo}>
            <Typography variant="h3"></Typography>
          </div>
          <div className={classes.buttonGroup}>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              onClick={this._onGetStarted}
            >
              Get Started
            </Button>
            <br />
            <Button
              variant="outlined"
              color="primary"
              size="large"
              onClick={this._onRestoreBackup}
            >
              Restore Backup
            </Button>
          </div>
        </div>
      </Page>
    )
  }
}

GetStarted.propTypes = {
  classes: PropTypes.object.isRequired // withStyles
};

export default withStyles(styles)(GetStarted)
