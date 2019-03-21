import React, { PureComponent } from 'react'

import { withStyles } from '@material-ui/styles'
import Drawer from '@material-ui/core/Drawer'

import {
  withAppContext
} from '../../services/Providers/AppStateContext'
import SidemenuEvent from '../../events/SidemenuEvent'
import { DASHBOARD, WALLET, WALLET_SEND, LOGIN,
  MNEMONIC_CONFIRM,
  RESTORE_BACKUP, NOMINATED_PASSWORD, SETTING,  WALLET_HISTORY  } from '../../constants/route'
import { IS_LOGGED, IS_SET_MNEMONIC, WALLET_ADDRESS} from '../../constants/storage'
import { goTo } from '../../services/navigation'
import Storage from '../../services/storage/storage'
import MenuDevtool from './component/MenuDevtool'
import Title from './component/MenuHeaderTitle'
import Items from './component/MenuItems'
import styles from './styles'

class Sidemenu extends PureComponent {
  state = {
    shouldShowSideMenu: false,
    devMenuOpen: false
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
      key: 'settings',
      title: 'settings',
      onClick: () => this.goTo('Settings')
    },
    {
      key: 'logout',
      title: 'logout',
      onClick: () => this.onClickLogout()
    },
    {
      key: 'login',
      title: 'Login',
      onClick: () => this.onLogin()
    },
  ]

  menuBottomOptions = [
    // {
    //   key: 'login',
    //   title: 'Force SignIn (test)',
    //   onClick: () => this.onClickTestLogin()
    // },
    // {
    //   title: 'got testRoute (test)',
    //   onClick: () => this.testRoute()
    // },
    // {
    //   title: 'set mnemonic (test)',
    //   onClick: () => this.onSetMnemonic()
    // },
    // {
    //   title: 'force logout (test)',
    //   onClick: () => this.onClickLogout()
    // },
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

  devMenus = [
    {
      key: 'login',
      title: 'Force SignIn',
      onClick: () => this.onClickTestLogin()
    },
    {
      title: 'force logout',
      onClick: () => this.onClickLogout()
    },
    {
      title: 'set mnemonic',
      onClick: () => this.onSetMnemonic()
    },
    {
      title: 'got testRoute',
      onClick: () => this.testRoute()
    },
    {
      title: 'Restore Backup',
      onClick: () =>{ SidemenuEvent.toggle(); goTo(RESTORE_BACKUP) }
    },
    {
      title: 'Confirm Mnemonic ',
      onClick: () =>{ SidemenuEvent.toggle(); goTo(MNEMONIC_CONFIRM, {mnemonic: "scrub slam warrior bamboo jacket swing cattle antique toy brand dynamic lunch"}) }
    },
    {
      title: 'Nominate Password',
      onClick: () =>{ SidemenuEvent.toggle(); goTo(NOMINATED_PASSWORD) }
    },
    {
      title: 'Wallet',
      onClick: () =>{ SidemenuEvent.toggle(); goTo(WALLET) }
    },
    {
      title: 'Dashboard',
      onClick: () =>{ SidemenuEvent.toggle(); goTo(DASHBOARD) }
    },
    {
      title: 'Wallet -> Send ',
      onClick: () =>{ SidemenuEvent.toggle(); goTo(WALLET_SEND) }
    },
    {
      title: 'Wallet -> History ',
      onClick: () =>{ SidemenuEvent.toggle(); goTo(WALLET_HISTORY) }
    },
    {
      title: 'Setting ',
      onClick: () =>{ SidemenuEvent.toggle(); goTo(SETTING) }
    },
  ]

  testRoute = () => {
    goTo(NOMINATED_PASSWORD)
  }

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

  onToggleDevMenu = () => {
    this.setState({devMenuOpen: !this.state.devMenuOpen})
  }


  onClickLogout = () => {
    this.onToggleMenu()
    Storage.clear()
    this.props.AppContext.clear()
    goTo('GetStarted')
  }

  onSetMnemonic = () => {
    this.onToggleMenu()
    this.props.AppContext.persist({ [IS_SET_MNEMONIC]: true })
  }

  onLogin = () => {
    this.onToggleMenu()
    // Storage.clear()
    // this.props.AppContext.set({ [IS_LOGGED]: t })
    goTo(LOGIN)
  }

  onClickTestLogin = async () => {
    this.onToggleMenu()
    // await Storage.set('is_mnemonic_set', true)
    // await Storage.set('is_password_set', true)
    // await Storage.set([IS_LOGGED], true)
    // await Storage.set('is_mnemonic_confirmed', true)
    this.props.AppContext.persist({
      [IS_LOGGED]: true,
      [WALLET_ADDRESS]: '0x0598aC83C088f126B3043059FCfd2E7A5F0886FF',
    })
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
          <div className={classes.devMenu}>
            <MenuDevtool items={this.devMenus} isOpen={this.state.devMenuOpen} onOpen={this.onToggleDevMenu} classes={classes} />
          </div>
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
