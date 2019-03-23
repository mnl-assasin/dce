import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import BasePage from '../../common/BasePage'
import { setBalance, setEtherPrice } from '../../hof'
import { convertedPricePerValue } from '../../helper/computation'
import { Page, Row, Col, Icon as ThemeIcon } from '../../common'
import { Navbar } from '../../components'
import { goTo } from '../../services/navigation'
import { withAppContext } from '../../services/Providers/AppStateContext'

import styles from './styles'
import './Dashboard.scss'

import EtherImage from './icon_ether.png'
import BitImage from './icon_bitcoin.png'

const icons = {
  ETHER: EtherImage,
  BitImage,
}

class Dashboard extends BasePage {
  title = 'Dashboard'
  // store = BasePage.store
  defaults = BasePage.constants.defaults
  storage = BasePage.constants.storage

  setEtherPrice = setEtherPrice(this)
  setBalance = setBalance(this)

  componentDidMount() {
    // get ether balance and set it to context
    this.setEtherPrice()

    this.setBalance(
      this.props.AppContext[this.storage.ACTIVE_PROVIDER_ID],
      this.props.AppContext[this.storage.WALLET_ADDRESS],
      value => this.setState({ amount: value })
    )
  }

  constructor(props) {
    super(props)

    this.state = {
      amount: 0,
      items: [
        {
          model: {},
          isWallet: true,
          amount: 'test value',
          value: '0.123432',
          iconComponent: <ThemeIcon src={EtherImage} size={70} />,
          onClick: model => {
            goTo('Wallet', model)
          },
        },
        {
          model: {},
          isWallet: true,
          amount: '0.123432',
          value: '0.123432',
          iconComponent: <ThemeIcon size={70} src={EtherImage} />,
          onClick: model => {
            goTo('Wallet', model)
          },
        },
        {
          model: {},
          isWallet: true,
          amount: '2.123432',
          value: '0.123432',
          iconComponent: <ThemeIcon size={70} src={EtherImage} />,
          onClick: model => {
            goTo('Wallet', model)
          },
        },
        {
          model: {},
          isWallet: true,
          amount: '4.123432',
          value: '100.123432',
          iconComponent: <ThemeIcon size={70} src={BitImage} />,
          onClick: model => {
            goTo('Wallet', model)
          },
        },
      ],
    }

    this.onRenderWidget.bind(this)
    // this.onClickItem.bind(this);
  }

  onClickRestoreRecover() {}

  onClickBackUpChain() {}

  onClickItem(item) {
    if (item.onClick) {
      item.onClick(item.model)
    }
  }

  onRenderWidget(item, i) {
    //
    // when item list icon is a wallet that have 2 lables, amout and value
    //
    if (item.isWallet) {
      return (
        <div
          className="Dashboard--widget pointer"
          key={i}
          onClick={this.onClickItem.bind(this, item)}
        >
          <div>{item.iconComponent}</div>
          <Typography align="center">{item.amount}</Typography>
          <Typography gutterBottom align="center">
            ${item.value}
          </Typography>
        </div>
      )
    }

    //
    // only icon and 1 label
    //
    return (
      <div
        className="Dashboard--widget"
        key={i}
        onClick={this.onClickItem.bind(this, item)}
      >
        <div>{item.iconComponent}</div>
        <Typography gutterBottom align="center">
          {item.label}
        </Typography>
      </div>
    )
  }

  onRenderAddWidget() {
    const addItem = {
      model: {},
      label: 'Add new wallet',
      icon: 'add_circle_outline',
      iconComponent: <ThemeIcon size={70} iconName="add_circle_outline" />,
      onClick: () => {
        this.setState({
          items: [
            ...this.state.items,
            {
              model: {},
              label: '123',
              icon: 'card_travel',
              iconComponent: <ThemeIcon size={70} src={EtherImage} />,
              onClick: model => {
                goTo('Wallet', model)
                // goTo('Wallet', model)
              },
            },
          ],
        })
      },
    }

    return this.onRenderWidget(addItem, this.state.items.length)
  }

  onRenderList() {
    return this.state.items.map((item, i) => this.onRenderWidget(item, i))
  }

  _renderWallet = (amount, value, key = 'ETHER') => {
    const item = {
      key: key,
      model: {},
      isWallet: true,
      amount: amount,
      value: value,
      iconComponent: <ThemeIcon src={icons[key]} size={70} />,
      onClick: model => {
        goTo('Wallet', model)
      },
    }
    return this.onRenderWidget(item, key)
  }

  render() {
    const { AppContext } = this.props
    let _renderedItems = this.onRenderList()
    let _renderedAddItem = this.onRenderAddWidget()
    const _renderWallet = this._renderWallet(
      this.state.amount,
      convertedPricePerValue(
        AppContext[this.storage.ETHER_PRICE],
        this.state.amount
      ),
      'ETHER'
    )

    return (
      <Page className="Dashboard">
        <Navbar />
        <div className="Content">
          {AppContext[this.storage.IS_SET_MNEMONIC] ? null : (
            <Row flex="1" justifyContent="center">
              <Button
                variant="outlined"
                color="secondary"
                className="Button"
                size="large"
                onClick={this.onClickRestoreRecover.bind(this)}
              >
                Restore recovery
              </Button>
            </Row>
          )}
          <Row flex="11" justifyContent="center">
            <Col flex="1">
              <div className="Dashboard--widget-container">
                {_renderWallet}
                {_renderedItems}
                {_renderedAddItem}
              </div>
            </Col>
          </Row>
          <Row flex="1" justifyContent="center">
            <Button
              variant="outlined"
              color="primary"
              className="Button"
              size="large"
              onClick={this.onClickBackUpChain.bind(this)}
            >
              Backup on chain
            </Button>
          </Row>
        </div>
      </Page>
    )
  }
}

Dashboard.propTypes = {
  AppContext: PropTypes.object.isRequired, // withAppContext
  classes: PropTypes.object.isRequired, // withStyles
}

export default withStyles(styles)(withAppContext(Dashboard))
