import React from 'react'
import PropTypes from "prop-types"
import chunk from 'lodash/chunk'
import { Wallet } from 'dapper'

import { withStyles } from '@material-ui/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import BasePage from "../../common/BasePage";
import { Navbar } from '../../components'
import { Page, Col, Row } from '../../common'
import { goTo } from '../../services/navigation'
import { withAppContext } from "../../services/Providers/AppStateContext"

import './MnemonicPhrase.scss'
import styles from './styles'

class MnemonicPhrase extends BasePage {
  title = 'MnemonicPhrase'
  defaults = BasePage.constants.defaults
  storage = BasePage.constants.storage
  store = BasePage.store

  state = {
    isLoaded: false,
    error: '',
    mnemonic: ''
  }

  constructor(props) {
    super(props)

    this.state = {
      ...props
    }

  }

  async componentDidMount () {
    this.store.set([this.storage.WALLET_MNEMONIC], false)
    this.store.set([this.storage.IS_SET_PASSWORD], false)

    try {
      const wallet  = await Wallet.ethers.create()
      if (wallet.code === 200) {
        this.props.AppContext.persist({
          [this.storage.WALLET_MNEMONIC]: wallet.data.mnemonic,
          [this.storage.WALLET_ADDRESS]: wallet.data.address,
          [this.storage.WALLET_PRIVATE_KEY]: wallet.data.privateKey,
          [this.storage.WALLET_PUBLIC_KEY]: wallet.data.publicKey
        })
      }
      this.setState({
        mnemonic: wallet.data.mnemonic,
        isLoaded: true
      })
    } catch (e) {
      console.log('error creating mnemonic', e)
      this.setState({
        error: 'something wrong',
        isLoaded: true
      })
    }
  }

  _createRows(items) {
    return items.map((item, key) => {
      return (
        <Row
          flex="1"
          justifyContent="center"
          className="Phrase--item"
          key={key}
        >
          <Col flex="1 0px" alignItems="center" className="Phrase--index">
            <Typography variant="h6">{item.index}</Typography>
          </Col>
          <Col flex="3">
            <Typography variant="h6">&nbsp;{item.item}</Typography>
          </Col>
        </Row>
      )
    })
  }

  _createColumns(arr) {
    let _arr = arr.map((item, index) => {
      return {
        index: index + 1,
        item: item
      }
    })

    let _chunks = chunk(_arr, 2)

    return _chunks.map((row, index) => {
      return (
        <Row flex="1" className="padding" key={index}>
          {this._createRows(row)}
        </Row>
      )
    })
  }

  _onClickAgree = (words) => {
    goTo('MnemonicPhraseConfirm', {
      mnemonic: this.state.mnemonic
    })
  }

  render() {
    const { classes } = this.props
    const { isLoaded, error, mnemonic } = this.state

    if (!isLoaded) {
      return <span>Loading...</span>
    }

    if (error) {
      return <span>{error}</span>
    }

    // better create icons for every numbers

    let arrWords = mnemonic.split(' ')
    return (
      <Page className="MnemonicPhrase">
        <Navbar backButton={true} />
        <div className="Content">
          <Col>
            <Col flex="10" className="Padding--row">
              <Typography variant="caption" gutterBottom>
                This is your only way to backup. Write this down and store it
                somewhere safe.
              </Typography>
              {this._createColumns(arrWords)}
            </Col>
            <Col flex="2" className="Padding--row">
              <div className={classes.button}>
                <Button
                  variant="outlined"
                  size="medium"
                  color="primary"
                  fullWidth
                  onClick={this._onClickAgree}
                >
                  Got it
                </Button>
              </div>
            </Col>
          </Col>
        </div>
      </Page>
    )
  }
}

MnemonicPhrase.propTypes = {
  AppContext: PropTypes.object.isRequired, // withAppContext
  classes: PropTypes.object.isRequired // withStyles
}

export default withStyles(styles)(withAppContext(MnemonicPhrase))
