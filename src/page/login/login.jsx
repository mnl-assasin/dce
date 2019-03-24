import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/styles'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

import { Navbar, PrimaryButton, Text } from '../../components'
import { Padding } from '../../layout'

import BasePage from '../../common/BasePage'
import { inputTypes } from '../../constants/types'
import { Page } from '../../common'
import { goTo as navigate } from '../../services/navigation'
import { withAppContext } from '../../services/Providers/AppStateContext'

import styles from './styles'

class Login extends BasePage {
  title = 'Dapper Wallet'

  state = {
    password: '',
    passwordVisible: false,
  }

  onHandlePassword = e => {
    this.setState({
      password: e.target.value,
    })
  }

  onShowPasswordVisibility = () => {
    this.setState({ passwordVisible: !this.state.passwordVisible })
  }

  onUseBackup = () => {
    navigate(BasePage.constants.route.RESTORE_BACKUP)
  }

  render() {
    const { classes } = this.props

    return (
      <Page className={classes.root}>
        <Navbar title={this.title} />
        <div className={classes.content}>
          <div className={classes.logo}>
            <Text variant="h3">login</Text>
          </div>

          <form className={classes.container} noValidate autoComplete="off">
            <TextField
              label="Enter Password"
              variant="outlined"
              className={classes.textField}
              value={this.state.password}
              onChange={this.onHandlePassword}
              type={
                this.state.passwordVisible
                  ? inputTypes.text
                  : inputTypes.password
              }
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Toggle password visibility"
                      onClick={this.onShowPasswordVisibility}
                    >
                      {this.state.passwordVisible ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Padding bottom={4} top={32}>
              <PrimaryButton
                type="primary"
                onClick={this.onClickSubmit}
                fullWidth
              >
                Confirm
              </PrimaryButton>
            </Padding>
            <Padding vertical={4}>
              <PrimaryButton
                type="secondary"
                onClick={this.onUseBackup}
                fullWidth
              >
                use backup phrase to login
              </PrimaryButton>
            </Padding>
          </form>
        </div>
      </Page>
    )
  }
}

Login.propTypes = {
  AppContext: PropTypes.object.isRequired, // withAppContext
  classes: PropTypes.object.isRequired, // withStyles
}

export default withStyles(styles)(withAppContext(Login))
