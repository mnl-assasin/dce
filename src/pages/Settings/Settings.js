import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import Divider from '@material-ui/core/Divider';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import BasePage from '../../common/BasePage'
import { Page } from '../../common'
import { Navbar } from '../../components';
import { withAppContext } from '../../services/Providers/AppStateContext'
import { getNetworkById } from '../../services/storage/collections/network'

import styles from './styles';
import './Settings.css';

// this will ensure that the render will not make new init every render for child
// this must be partenered will pureComponent
const variables = {
      sLoginSecurityV: 'password etc',
}

class Settings extends BasePage {
  title = "Settings"
  settingItems = [
    {
      title: 'Login and Security',
      getValue: () => variables.sLoginSecurityV,
      onClick: () => this.navigate(this.constants.route.SECURITY)
    },
    {
      title: 'Network',
      getValue: () => this.props.AppContext[this.constants.storage.ACTIVE_PROVIDER_NAME],
      onClick: () => this.navigate(this.constants.route.NETWORK)
    }
  ]

  render () {
    const { classes } = this.props;
    return (
      <Page>
        <Navbar title={this.title} backButton />
        <div>
          <List className={classes.root}>
            {this.settingItems.map((item, index ) => (
              <React.Fragment key={index} >
              <ListItem key={index}  button onClick={item.onClick}>
                <ListItemText primary={item.title} secondary={item.getValue()} />
                <ListItemIcon>
                  <KeyboardArrowRight />
                </ListItemIcon>
              </ListItem><Divider />
              </React.Fragment>
            ))}
          </List>
        </div>
      </Page>
    );
  }
}

Settings.propTypes = {
   AppContext: PropTypes.object.isRequired,  // withAppContext
   classes: PropTypes.object.isRequired,     // withStyles
};

export default withStyles(styles)(withAppContext(Settings));
