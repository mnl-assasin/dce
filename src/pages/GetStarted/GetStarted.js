import React from 'react';
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/styles"
import Button from "@material-ui/core/Button"

import { goTo } from '../../services/navigation'
import { Page } from '../../common'
import { Navbar } from '../../components'

import styles from "./styles"

class GetStarted extends React.Component {

  _onGetStarted = async () => {
    goTo('MnemonicPhrase')
  }

  _onRestoreBackup = () => {
    goTo('RestoreBackup')
  }

  render () {
    const { classes } = this.props
    return (
      <Page className="GetStarted">
        <Navbar/>
        <div className="Content">
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
