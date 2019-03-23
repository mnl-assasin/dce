import React from 'react';
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff"
import Typography from '@material-ui/core/Typography'


import BasePage from "../../common/BasePage";
import { inputTypes } from "../../constants/types";
import { Page } from '../../common'
import { Navbar } from '../../components';
import { goTo as navigate } from '../../services/navigation'
import { withAppContext } from "../../services/Providers/AppStateContext";

import styles from "./styles"

class Login extends BasePage {
  title = "Dapper Wallet"

  state = {
    password: '',
    passwordVisible: false
  }

  onHandlePassword = e => {
    this.setState({
      password: e.target.value
    });
  }

  onShowPasswordVisibility = () => {
    this.setState({passwordVisible: !this.state.passwordVisible})
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
            <Typography variant="h3">login</Typography>
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
                )
              }}
            />
            <div className={classes.buttonHolder}>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                onClick={this.onClickSubmit}
              >
                Confirm
              </Button>
            </div>
          </form>
          <div className={classes.spacer} />
          <div className={classes.fixBottom}>
            <Button color="primary" onClick={this.onUseBackup}>
              use backup phrase to login
            </Button>
          </div>
        </div>
      </Page>
    );
  }
}

Login.propTypes = {
  AppContext: PropTypes.object.isRequired, // withAppContext
  classes: PropTypes.object.isRequired // withStyles
};

export default withStyles(styles)(withAppContext(Login));
