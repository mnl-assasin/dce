import React from 'react'
import backgrounds from '../../constants/style'
import { getStyle } from './styles'
const component = ({
  classes,
  color,
  children,
  type = 'primary',
  size = 'medium',
  style = {},
  ...props
}) => {
  const styles = getStyle(size, style)
  return (
    <div
      className={classes.root}
      style={{
        background: backgrounds[type].background,
        ...styles.box,
      }}
      color="none"
      {...props}
    >
      <span className={classes.label} style={styles.font}>
        {children}
      </span>
    </div>
  )
}

export default component
