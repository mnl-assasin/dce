import React from "react";
import Proptypes from "prop-types";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const component = ({ items, isLogged }) => (
  <List>
    {items.map((item, index) => {
      if (item.key === "logout" && !isLogged) {
        // this make logout button not included in the menu with highest performance than any other approach
        return null;
      }
      if (item.key === "login" && isLogged) {
        return null;
      }

      return (
        <ListItem button key={index} onClick={item.onClick}>
          <ListItemText primary={item.title} />
        </ListItem>
      );
    })}
  </List>
);

component.defaultProps = {
  items: [],
  isLogged: false
};

component.propTypes = {
  items: Proptypes.array
};

export default component;
