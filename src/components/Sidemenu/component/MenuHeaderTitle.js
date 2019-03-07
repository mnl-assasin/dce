import React from 'react'
import Proptypes from 'prop-types'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'

const component = ({ code, title, version }) => (
  <List>
    <ListItem>
      <ListItemText>
        <Typography variant="title">{title}</Typography>
        <Typography>version {version}</Typography>
        <Typography>version code {code}</Typography>
      </ListItemText>
    </ListItem>
  </List>
)

component.defaultProps = {
  code: '',
  title: '',
  version: '',
}

component.propTypes = {
  code: Proptypes.string,
  title: Proptypes.string,
  version: Proptypes.string,
}

export default component