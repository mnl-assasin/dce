import React, { Component } from 'react';
import { goBack } from '../../services/navigation';
import SidemenuEvent from '../../events/SidemenuEvent'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import MenuIcon from '@material-ui/icons/Menu';
import './Navbar.css';


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class Navbar extends Component {
  onToggleMenu() {
    SidemenuEvent.toggle()
  }

  onClickBackButton() {
    goBack();
  }

  _renderBackButton() {
    return (
      <IconButton
        onClick={this.onClickBackButton}
        className="Navbar--button-back"
        color="inherit"
        aria-label="Menu"
      >
        <ArrowBackIosIcon />
      </IconButton>
    )
  }

  onRenderTitle() {
    if (this.props.titleComponent) {
      return this.props.titleComponent
    }

    return (
      <Typography variant="h6" color="inherit" className="Navbar--title">
        { (this.props.title || '') }
      </Typography>
    )
  }

  render() {
    const backButton = this.props.backButton || false
    const hideBurger = this.props.hideBurger || false

    return (
      <div className='Navbar'>
        <AppBar position="static">
          <Toolbar>
            {
              backButton 
                ? this._renderBackButton()
                : null
            }
            
            { this.onRenderTitle() }

            {
              !hideBurger 
                ? (
                  <IconButton
                    onClick={this.onToggleMenu}
                    className="Navbar--button"
                    color="inherit"
                    aria-label="Menu"
                  >
                    <MenuIcon />
                  </IconButton>
                )
                : null
            }
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

// export default Navbar;
export default withStyles(styles)(Navbar);