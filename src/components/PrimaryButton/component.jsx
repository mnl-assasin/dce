import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import * as styles from './styles'

const component = ({ classes, type = 'primary', ...props }) => {
  return <Button style={styles[type]} {...props} />
}

component.propTypes = {
  classes: PropTypes.object.isRequired, // withStyles
  type: PropTypes.string.isRequired,
}

export default component
