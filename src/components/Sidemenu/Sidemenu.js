import React, { Component } from 'react';
import { goTo } from 'route-lite';
import SidemenuEvent from '../../events/SidemenuEvent'

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import './Sidemenu.css';

class Sidemenu extends Component {

  constructor(props) {
    super(props)

    this.state = {
      shouldShowSideMenu: false,
    }
  }

  componentDidMount() {
    SidemenuEvent.on('sidemenu:toggle', () => {
      this.setState({
        shouldShowSideMenu: !this.state.shouldShowSideMenu
      })
    })
  }

  onToggleMenu() {
    SidemenuEvent.toggle();
  }

  goTo(page) {
    this.onToggleMenu();
    goTo(page)
  }

  render() {

    const sideList = (
      <div className="Sidemenu--full-list">
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <Drawer anchor="right" open={this.state.shouldShowSideMenu} onClose={this.onToggleMenu.bind(this)}>
        <div
          tabIndex={0}
          role="button"
          onClick={this.onToggleMenu.bind(this)}
          onKeyDown={this.onToggleMenu.bind(this)}
        >
          {sideList}
        </div>
      </Drawer>
    )
  }
}

export default Sidemenu;