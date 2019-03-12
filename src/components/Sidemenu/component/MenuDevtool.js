import React, { useState } from "react";
import Proptypes from "prop-types";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText"
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


const component = ({ title, items, isLogged, classes }) => {
  const [anchorEl, setAnchorEl] = useState()

  return   (
    <List>
      <ListItem button onClick={(e) => setAnchorEl(e.currentTarget)}
        aria-owns={'simple-menu'}
        aria-haspopup="true"
      ><ListItemText primary={title} /></ListItem>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
      {
        items.map((item, index) => <MenuItem key={index} onClick={item.onClick} >{item.title}</MenuItem>)
      }
     
      </Menu>

    </List>
  );
}
component.defaultProps = {
  items: [],
  isLogged: false,
  title: 'Debug Menu',
  isOpen: false,
};

component.propTypes = {
  isOpen: Proptypes.bool,
  items: Proptypes.array.isRequired,
  onOpen:  Proptypes.func.isRequired,
  classes:  Proptypes.object.isRequired,
};

export default component;



