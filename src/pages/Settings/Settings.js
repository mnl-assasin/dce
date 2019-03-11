import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Divider from "@material-ui/core/Divider";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

import BasePage from "../../common/BasePage";
import { Page } from "../../common";
import { Navbar } from "../../components";
import { goTo as navigate } from '../../services/navigation'
import { withAppContext } from "../../services/Providers/AppStateContext";

import styles from "./styles";


// this will ensure that the render will not make new init every render for child
// this must be partenered will pureComponent
// const variables = {
//   sLoginSecurityV: "password etc"
// };

class Settings extends BasePage {
  title = "Settings"
  settingItems = [
    // {
    //   title: 'Login and Security',
    //   getValue: () => variables.sLoginSecurityV,
    //   onClick: () => navigate(BasePage.constants.route.SECURITY)
    // },
    {
      title: "Network",
      getValue: () => this.props.AppContext[BasePage.constants.storage.ACTIVE_PROVIDER_NAME],
      onClick: () => navigate(BasePage.constants.route.NETWORK)
    }
  ]

  render() {
    const { classes } = this.props;
    return (
      <Page>
        <Navbar title={this.title} backButton />
        <div>
          <List className={classes.root}>
            {this.settingItems.map((item, index) => (
              <React.Fragment key={index}>
                <ListItem key={index} button onClick={item.onClick}>
                  <ListItemText
                    primary={item.title}
                    secondary={item.getValue()}
                  />
                  <ListItemIcon>
                    <KeyboardArrowRight />
                  </ListItemIcon>
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        </div>
      </Page>
    );
  }
}

Settings.propTypes = {
  AppContext: PropTypes.object.isRequired, // withAppContext
  classes: PropTypes.object.isRequired // withStyles
};

export default withStyles(styles)(withAppContext(Settings));
