import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Divider from '@material-ui/core/Divider'
import RadioButtonChecked from '@material-ui/icons/RadioButtonChecked'

import BasePage from '../../../common/BasePage'
import { setBlockNumber } from '../../../hof'
import { Page } from '../../../common'
import { Navbar } from '../../../components'
import { goTo as navigate } from '../../../services/navigation'
import { withAppContext } from '../../../services/Providers/AppStateContext'

import styles from './styles'

class Network extends BasePage {
  title = 'Network'
  setBlockNumber = setBlockNumber(this)

  settingItems = [
    {
      _id: 'mainnet',
      title: 'mainnet',
    },
    {
      _id: 'homestead',
      title: 'homestead',
    },
    {
      _id: 'rinkeby',
      title: 'rinkeby',
    },
    {
      _id: 'ropsten',
      title: 'ropsten',
    },
    {
      _id: 'kovan',
      title: 'kovan',
    },
    {
      _id: 'goerli',
      title: 'goerli',
    },
  ]

  _getIsActive = network => {
    if (!network._id) return false
    return (
      network._id ===
      this.props.AppContext[BasePage.constants.storage.ACTIVE_PROVIDER_ID]
    )
  }

  _setIsActive = network => {
    if (!network._id) {
      console.log('invalid network id provided')
      return false
    }

    if (
      network._id ===
      this.props.AppContext[BasePage.constants.storage.ACTIVE_PROVIDER_ID]
    ) {
      return ''
    }
    this.setBlockNumber(
      network._id,
      value =>
        this.props.AppContext.persist({
          [BasePage.constants.storage.ACTIVE_PROVIDER_ID]: network._id,
          [BasePage.constants.storage.ACTIVE_PROVIDER_NAME]: network.title,
          [BasePage.constants.storage.ACTIVE_PROVIDER_BlOCKNUMBER]: String(
            value
          ),
        }),
      error => this.setState({ blockNumber: '' })
    )
    return navigate(BasePage.constants.route.SETTING)
  }

  render() {
    const { classes } = this.props
    return (
      <Page>
        <Navbar title={this.title} backButton />
        <div>
          <List className={classes.root}>
            {this.settingItems.map((item, index) => {
              const isActive = this._getIsActive(item)
              return (
                <React.Fragment key={item._id}>
                  <ListItem
                    button
                    onClick={() => this._setIsActive(item)}
                    selected={isActive}
                  >
                    <ListItemText primary={item.title} secondary={item.info} />
                    {isActive ? (
                      <ListItemIcon>
                        <RadioButtonChecked />
                      </ListItemIcon>
                    ) : null}
                  </ListItem>
                  <Divider />
                </React.Fragment>
              )
            })}
          </List>
        </div>
      </Page>
    )
  }
}

Network.propTypes = {
  AppContext: PropTypes.object.isRequired, // withAppContext
  classes: PropTypes.object.isRequired, // withStyles
}

export default withStyles(styles)(withAppContext(Network))
