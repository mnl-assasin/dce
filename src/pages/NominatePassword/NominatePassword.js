import React, { Component } from 'react'

import { withStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

import {
  withAppContext,
  IS_LOOGED
} from '../../services/Prividers/AppStateContext'
import { goTo } from '../../services/navigation'
import { isPassword } from '../../helper/string'
import { Page, Row, Col, Input } from '../../common'
import { Navbar, alertDialog, showSnackbar } from '../../components'
import Storage from '../../services/storage/storage'

import styles from './styles'
import './NominatePassword.css'

// use to not make new instance every render
const inputTypes = {
  text: 'text',
  password: 'password'
}

class NominatePassword extends Component {
  constructor(props) {
    super(props)

    this.state = {
      password: '',
      passwordVisible: false,
      confirmPassword: '',
      confirmPasswordVisible: false
    }
  }

  onClickSubmit = () => {
    const { password, confirmPassword } = this.state
    // validate passwords,

    if (!isPassword(password)) {
      return showSnackbar({
        message:
          'Password must be at least 8 characters  and contain 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character.',
        variant: 'warning'
      })
    }

    if (password !== confirmPassword) {
      return showSnackbar({
        message: 'Password did not match',
        variant: 'warning'
      })
      // return alertDialog({
      //   title: "Alert",
      //   message: "Password did not match"
      // })
    }

    // should save to storage
    // should go to dashboard
    Storage.set('is_password_set', true)
    Storage.set('password', password)
    this.props.AppContext.onAppContextChange({ [IS_LOOGED]: true })

    goTo('Dashboard')
  }

  onHandlePassword = e => {
    this.setState({
      password: e.target.value
    })
  }

  onHandleConfirmPassword = e => {
    this.setState({
      confirmPassword: e.target.value
    })
  }
  onShowPasswordVisibility = () => {
    this.setState({
      passwordVisible: !this.state.passwordVisible
    })
  }

  onShowConfirmPasswordVisibility = () => {
    this.setState({
      confirmPasswordVisible: !this.state.confirmPasswordVisible
    })
  }

  render() {
    const { classes } = this.props
    return (
      <Page className="NominatePassword">
        <Navbar backButton={true} />

        <div className="Content">
          <Row flex="2" alignItems="center" justifyContent="center">
            Welcome back and logo
          </Row>

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
                )
              }}
            />

            <TextField
              label="Enter Confirm Password"
              margin="normal"
              variant="outlined"
              className={classes.textField}
              value={this.state.confirmPassword}
              onChange={this.onHandleConfirmPassword}
              type={
                this.state.confirmPasswordVisible
                  ? inputTypes.text
                  : inputTypes.password
              }
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Toggle password visibility"
                      onClick={this.onShowConfirmPasswordVisibility}
                    >
                      {this.state.confirmPasswordVisible ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <div className={classes.buttonHolder}>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                className={classes.button}
                onClick={this.onClickSubmit}
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </Page>
    )
  }
}

export default withStyles(styles)(withAppContext(NominatePassword))
