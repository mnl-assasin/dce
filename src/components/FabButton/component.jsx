import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import * as styles from './styles'
import backgrounds from '../../constants/style'

const baseSize = 14

const component = ({
  classes,
  color,
  children,
  type = 'primary',
  size = 'medium',
  ...props
}) => {
  const style = {}
  let fontSize = baseSize
  if (size === 'small') {
    style.width = baseSize * 2
    style.height = baseSize * 2
    fontSize = baseSize * 1
  }
  if (size === 'medium') {
    style.width = baseSize * 3.5
    style.height = baseSize *  3.5
    fontSize = baseSize * 2
  }
  if (size === 'large') {
    style.width = baseSize * 4
    style.height = baseSize *  4
    fontSize = baseSize * 3
  }

  return (
    <div
      className={classes.root}
      style={{ background: backgrounds[type].background, ...style }}
      color="none"
      {...props}
    >
      <span className={classes.label} style={{ fontSize: fontSize }}>
        {children}
      </span>
    </div>
  )
}

// component.propTypes = {
//   classes: PropTypes.object.isRequired, // withStyles
// }

export default component
