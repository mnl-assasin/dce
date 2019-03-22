import React from 'react'
import Proptypes from 'prop-types'

import { Navbar } from '../../components'

const component = ({
  children,
  horizontal,
  vertical,
  all,
  style,
  size,
  ...props
}) => {
  const paddingStyle = {}
  const value = size * 4

  if (horizontal) {
    paddingStyle['paddingLeft'] = value
    paddingStyle['paddingRight'] = value
  }

  if (vertical) {
    paddingStyle['paddingTop'] = value
    paddingStyle['paddingBottom'] = value
  }

  if (!(vertical || horizontal)) {
    paddingStyle['padding'] = value
  }

  return (
    <div style={{ ...paddingStyle, ...style }} {...props}>
      {children}
    </div>
  )
}
component.defaultProps = {
  children: null,
  size: 1,
  style: {},
  horizontal: false,
  vertical: false,
  all: true,
}

component.propTypes = {
  children: Proptypes.node,
  size: Proptypes.number,
  style: Proptypes.object,
}

export default component
