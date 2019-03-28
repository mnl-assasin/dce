import React from 'react'
import PropTypes from 'prop-types'
import chunk from 'lodash/chunk'
import { Wallet } from 'dapper'

import { withStyles } from '@material-ui/styles'

import BasePage from '../../common/BasePage'
import {
  Navbar,
  PrimaryButton,
  SmallButton,
  Text,
  Loading,
} from '../../components'
import { Center } from '../../layout'
import { Page, Col, Row } from '../../common'
import { goTo } from '../../services/navigation'
import { withAppContext } from '../../services/Providers/AppStateContext'

import './MnemonicPhrase.scss'
import styles from './styles'

class MnemonicPhrase extends BasePage {
  title = 'MnemonicPhrase'
  defaults = BasePage.constants.defaults
  storage = BasePage.constants.storage
  route = BasePage.constants.route
  store = BasePage.store

  state = {
    isLoaded: false,
    error: '',
    mnemonic: '',
    wallet: {},
  }

  componentDidMount() {
    setTimeout(this.init, 0.5)
  }
  init = async () => {
    this.store.set([this.storage.WALLET_MNEMONIC], false)
    this.store.set([this.storage.IS_SET_PASSWORD], false)

    try {
      const wallet = await Wallet.ethers.create()
      if (wallet.code === 200) {
        this.props.AppContext.persist({
          [this.storage.WALLET_MNEMONIC]: wallet.data.mnemonic,
          [this.storage.WALLET_ADDRESS]: wallet.data.address,
          [this.storage.WALLET_PRIVATE_KEY]: wallet.data.privateKey,
          [this.storage.WALLET_PUBLIC_KEY]: wallet.data.publicKey,
        })
      }
      this.setState({
        mnemonic: wallet.data.mnemonic,
        isLoaded: true,
        wallet: wallet.data,
      })
    } catch (e) {
      console.log('error creating mnemonic', e)
      this.setState({
        error: 'something wrong',
        isLoaded: true,
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
          <div className={this.props.classes.smallButtonHolder}>
            <SmallButton
              count={item.index}
              title={item.item}
              noEffect
              disableRipple
            />
          </div>
        </Row>
      )
    })
  }

  _createColumns(arr) {
    let _arr = arr.map((item, index) => {
      return {
        index: index + 1,
        item: item,
      }
    })

    let _chunks = chunk(_arr, 2)

    return _chunks.map((row, index) => {
      return (
        <Row flex="1" key={index}>
          {this._createRows(row)}
        </Row>
      )
    })
  }

  _onClickAgree = () => {
    goTo(this.route.MNEMONIC_CONFIRM, {
      mnemonic: this.state.mnemonic,
      wallet: this.state.wallet,
      successLocation: this.props.successLocation,
    })
  }

  render() {
    const { classes } = this.props
    const { isLoaded, error, mnemonic } = this.state
    console.log(this.props, this.state)
    if (!isLoaded) {
      return (
        <Page className="MnemonicPhrase">
          <Navbar backButton={true} />
          <div className="Content">
            <Center>
              <Loading />
            </Center>
          </div>
        </Page>
      )
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
              <Text variant="caption" gutterBottom>
                This is your only way to backup. Write this down and store it
                somewhere safe.
              </Text>
              {this._createColumns(arrWords)}
            </Col>
            <Col flex="2" className="Padding--row">
              <br />
              <br />
              <div className={classes.button}>
                <PrimaryButton
                  type="primary"
                  size="medium"
                  fullWidth
                  onClick={this._onClickAgree}
                >
                  Got it
                </PrimaryButton>
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
  classes: PropTypes.object.isRequired, // withStyles
}

export default withStyles(styles)(withAppContext(MnemonicPhrase))
