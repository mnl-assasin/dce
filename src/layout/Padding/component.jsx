import React from 'react'
import { getStyle } from './styles'

const component = ({
  children,
  style,
  size,
  all = undefined,
  left = undefined,
  top = undefined,
  right = undefined,
  bottom = undefined,
  horizontal = undefined,
  vertical = undefined,
  ...props
}) => {
  const styles = getStyle({
    size,
    all,
    left,
    top,
    right,
    bottom,
    horizontal,
    vertical,
  })
  return (
    <div style={{ ...styles, ...style }} {...props}>
      {children}
    </div>
  )
}

export default component
