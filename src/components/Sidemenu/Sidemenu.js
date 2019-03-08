import React, { PureComponent, useContext } from 'react'

import { withStyles } from '@material-ui/styles'
import Drawer from '@material-ui/core/Drawer'

import {
  withAppContext,
  IS_LOOGED
} from '../../services/Prividers/AppStateContext'
import SidemenuEvent from '../../events/SidemenuEvent'
import { GET_STARTED, DASHBOARD } from '../../constants/route'
import { goTo } from '../../services/navigation'
import Storage from '../../services/storage/storage'
import Title from './component/MenuHeaderTitle'
import Items from './component/MenuItems'
import styles from './styles'

class Sidemenu extends PureComponent {
  state = {
    shouldShowSideMenu: false
  }

  menuTopOptions = [
    {
      title: 'terms and condition',
      onClick: () => this.goTo('Settings')
    },
    {
      title: 'privacy policy',
      onClick: () => this.goTo('Settings')
    },
    {
      title: 'settings',
      onClick: () => this.goTo('Settings')
    },
    {
      key: 'logout',
      title: 'logout',
      onClick: () => this.onClickLogout()
    }
  ]

  menuBottomOptions = [
    {
      key: 'login',
      title: 'Force SignIn (test)',
      onClick: () => this.onClickTestLogin()
    },
    {
      title: 'build dapps'
    },
    {
      title: 'join the team'
    },
    {
      title: 'investors'
    },
    {
      title: 'website'
    }
  ]

  appInfo = {
    version: '2.2.2',
    code: '2',
    title: 'dapper wallet'
  }

  componentDidMount() {
    SidemenuEvent.on('sidemenu:toggle', () => {
      this.setState({
        shouldShowSideMenu: !this.state.shouldShowSideMenu
      })
    })
  }

  onToggleMenu = () => {
    SidemenuEvent.toggle()
  }

  onClickLogout = () => {
    this.onToggleMenu()
    Storage.clear()
    this.props.AppContext.onAppContextChange({ [IS_LOOGED]: false })
    goTo('GetStarted')
  }

  onClickTestLogin = async () => {
    this.onToggleMenu()
    await Storage.set('is_mnemonic_set', true)
    await Storage.set('is_password_set', true)
    await Storage.set('is_mnemonic_confirmed', true)
    this.props.AppContext.onAppContextChange({ [IS_LOOGED]: true })
    goTo(DASHBOARD)
  }

  goTo = page => {
    this.onToggleMenu()
    goTo(page)
  }

  render() {
    const { classes, AppContext } = this.props
    return (
      <Drawer
        anchor="right"
        open={this.state.shouldShowSideMenu}
        onClose={this.onToggleMenu}
      >
        <div className={classes.root} tabIndex={0}>
          <Title
            version={this.appInfo.version}
            code={this.appInfo.code}
            title={this.appInfo.title}
          />
          <div className={classes.topDevider}>
            <Items items={this.menuTopOptions} isLogged={AppContext.isLogged} />
          </div>
          <div className={classes.devider} />
          <div className={classes.bottomDevider}>
            <Items
              items={this.menuBottomOptions}
              isLogged={AppContext.isLogged}
            />
          </div>
        </div>
      </Drawer>
    )
  }
}

export default withStyles(styles)(withAppContext(Sidemenu))
