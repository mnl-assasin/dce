import React from "react"
import PropTypes from "prop-types"

import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import LocalGasStation from '@material-ui/icons/LocalGasStation'
import AddCircleOutline from '@material-ui/icons/AddCircleOutline'
import FileCopy from '@material-ui/icons/FileCopy'
import BasePage from "../../../common/BasePage"
import { Page, Row } from '../../../common'
import { Navbar } from '../../../components'
import { inputTypes } from "../../../constants/types"
import { withAppContext } from "../../../services/Providers/AppStateContext"
import styles from "./styles"

class WalletSend extends BasePage {
  title = '@blocksmith'
  subTitle = 'send'

  defaults = BasePage.constants.defaults
  storage = BasePage.constants.storage

  state = {
    sendTo: '',
    amount: '',
    usd: '',
    gasLimit: '',
    transaction: '',
    yourAddresss: 'sdfsdf'
  }

  componentDidMount () {
    this.setState({
       yourAddresss: this.props.AppContext[this.storage.WALLET_ADDRESS]
    })
  }

  _setInpuState = (key, value) => {
    this.setState({[key]: value})
  }

  onChange = (e) => {
    this._setInpuState(e.target.name, e.target.value)
  }

  render() {
    const { classes } = this.props
    return (
      <Page className="WalletSend">
        <Navbar backButton title={this.title} />
        <div className="Content">
          <div className={classes.headerCoin}>
            <Typography variant="h4" gutterBottom>{this.subTitle}</Typography>
          </div>

          <form className={classes.container} noValidate autoComplete="off">
            <Row>
              <div  className={classes.myWalletAddress}>
                <TextField
                  title={this.state.yourAddresss}
                  label={"Your Address " + this.title}
                  variant="outlined"
                  className={classes.textField}
                  value={this.state.yourAddresss}
                  type={inputTypes.text}
                />
              </div>
                <div className={classes.addIcon}>
                  <FileCopy fontSize="inherit" />
                
                </div>
            </Row>
            <Row>
              <div  className={classes.sendTo}>
                <TextField
                  name="sendTo"
                  label="Send To"
                  variant="outlined"
                  className={classes.textField}
                  value={this.state.sendTo}
                  onChange={this.onChange}
                  type={inputTypes.text}
                />
              </div>
                <div className={classes.addIcon}>
                  <AddCircleOutline fontSize="inherit" />
                
                </div>
            </Row>
            <Row>
              <div  className={classes.amount}>
                <TextField
                  name="amount"
                  label="Amount"
                  variant="outlined"
                  className={classes.textField}
                  value={this.state.amount}
                  onChange={this.onChange}
                  type={inputTypes.text}
                />
              </div>
              <div className={classes.usd}>
                <TextField
                  name="usd"
                  label="USD"
                  variant="outlined"
                  className={classes.textField}
                  value={this.state.usd}
                  onChange={this.onChange}
                  type={inputTypes.text}
                />
              </div>
            </Row>
            <Row>
              <div  className={classes.gasLimit}>
                <TextField
                  name="gasLimit" 
                  label="Gas Limit (recomended)"
                  variant="outlined"
                  className={classes.textField}
                  value={this.state.gasLimit}
                  onChange={this.onChange}
                  type={inputTypes.text}
                />
              </div>
              <div className={classes.gasIcon}>
                <LocalGasStation fontSize="inherit">local_gas_station</LocalGasStation>
              </div>
            </Row>
            <TextField
              name="transaction"
              label="Tansaction Data (optional)"
              variant="outlined"
              className={classes.textField}
              value={this.state.transaction}
              onChange={this.onChange}
              type={inputTypes.text}
            />
            <div className={classes.buttonHolder}>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                onClick={this.onClickSubmit}
              >
                send
              </Button>
            </div>
          </form>
        </div>
      </Page>
    );
  }
}

WalletSend.propTypes = {
  AppContext: PropTypes.object.isRequired, // withAppContext
  classes: PropTypes.object.isRequired // withStyles
}

export default withStyles(styles)(withAppContext(WalletSend));
