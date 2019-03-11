import React from "react";
import Proptypes from "prop-types";

import Collapse from '@material-ui/core/Collapse';
    import Divider from '@material-ui/core/Divider';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const component = ({ title, onOpen, isOpen, items, isLogged, classes }) => (
<List>
  <ListItem button onClick={onOpen}>
    <ListItemText primary={title} />
    { isOpen ? <ExpandLess /> : <ExpandMore /> }
  </ListItem>
  <Collapse in={isOpen} timeout="auto" unmountOnExit>
    <List component="div" disablePadding >
    {
      items.map((item, index) =>
        <ListItem button key={index} onClick={item.onClick} >
          <ListItemText primary={item.title} className={classes.devMenuItems}/>
        </ListItem>
      )
    }
  <Divider />
    </List>
  </Collapse>

</List>
);

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



