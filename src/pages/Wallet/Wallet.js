import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import { goTo } from '../../services/navigation'
import { Page } from '../../common'
import { Navbar } from '../../components'
import { withAppContext } from '../../services/Providers/AppStateContext'
import WalletButtons from './component/WalletButtons'
import WalletHeader, { WalletHeaderTestValue } from './component/WalletHeader'
import WalletContent, {
  WalletContentTestValue
} from './component/WalletContent'

import './Wallet.scss'
import styles from './styles'

class Wallet extends React.Component {
  constructor(props) {
    super(props)
    this.renderTitleComponent = this.renderTitleComponent.bind(this)
  }

  renderTitleComponent() {
    return (
      <Typography variant="h6" color="inherit" className="Navbar--title">
        {'@blocksmith'}
      </Typography>
    )
  }

  onClickWalletReceice = () => {
    goTo('WalletReceive')
  }

  render() {
    const { classes } = this.props
    return (
      <Page className="Wallet">
        <Navbar
          backButton={true}
          titleComponent={this.renderTitleComponent()}
        />

        <div className={classes.content}>
          <WalletHeader classes={classes} {...WalletHeaderTestValue} />
          <WalletContent classes={classes} {...WalletContentTestValue} />
          <WalletButtons
            classes={classes}
            onWalletReceive={this.onClickWalletReceice}
          />
        </div>
      </Page>
    )
  }
}

Wallet.propTypes = {
  AppContext: PropTypes.object.isRequired, // withAppContext
  classes: PropTypes.object.isRequired // withStyles
}

export default withStyles(styles)(withAppContext(Wallet))
