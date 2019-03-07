import React, { PureComponent } from 'react'
import SidemenuEvent from '../../events/SidemenuEvent'

import { withStyles } from '@material-ui/styles'
import Drawer from '@material-ui/core/Drawer'

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
      title: 'logout',
      onClick: () => this.onClickLogout()
    }
  ]

  menuBottomOptions = [
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
    goTo('GetStarted')
  }

  goTo = (page) => {
    this.onToggleMenu()
    goTo(page)
  }

  render () {
    const { classes } = this.props

    return (
      <Drawer
        anchor="right"
        open={this.state.shouldShowSideMenu}
        onClose={this.onToggleMenu}
      >
        <div
          className={classes.root}
          tabIndex={0}
        >
          <Title version={'2.2.2'} code={'2'} title={'dapper wallet'} />
          <div className={classes.topDevider}>
            <Items items={this.menuTopOptions} />
          </div>
          <div className={classes.devider} />
          <div className={classes.bottomDevider}>
            <Items items={this.menuBottomOptions} />
          </div>
        </div>
      </Drawer>
    )
  }
}

export default withStyles(styles)(Sidemenu)
