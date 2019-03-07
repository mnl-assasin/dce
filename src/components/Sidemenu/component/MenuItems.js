import React from 'react'
import Proptypes from 'prop-types'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const component = ({ items }) => (
  <List>
    {items.map((item, index) => (
      <ListItem button key={index} onClick={item.onClick}>
        <ListItemText primary={item.title} />
      </ListItem>
    ))}
  </List>
)

component.defaultProps = {
  items: []
}

component.propTypes = {
  items: Proptypes.array
}

export default component
