import React from 'react'
import Proptypes from 'prop-types'
import Icon from '@material-ui/core/Icon';
// import List from '@material-ui/core/List'
// import ListItem from '@material-ui/core/ListItem'
// import ListItemText from '@material-ui/core/ListItemText'
// import Typography from '@material-ui/core/Typography'

const component = ({ size = 70, src, iconName = '' }) => {
	if (src) {
	  return <span><img src={src} width={size} height={size} /></span>
  }

  return <Icon  style={{fontSize: '' + size +'px'}} fontSize="inherit">{iconName}</Icon>
}
 

component.defaultProps = {
  size: 70,
  src: '',
  iconName: '',
}

component.propTypes = {
  size: Proptypes.number,
  src: Proptypes.string,
  iconName: Proptypes.string
}

export default component