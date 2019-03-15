import React from 'react'
import Proptypes from 'prop-types'

import { Navbar } from '../../components'

const component = ({ classes, children, navigationProps, containerProps, ...props }) => (
    <div className={classes.root} {...props}>
      <Navbar {...navigationProps} />
      <div className={classes.container}  {...containerProps} >
        {children}
      </div>
    </div>
)

component.defaultProps = {
  classes: {},
  navigationProps: {},
  containerProps: {},
  children: null
}

component.propTypes = {
  classes: Proptypes.object,  // withStyles
  children: Proptypes.node,
  navigationProps: Proptypes.object,
  containerProps: Proptypes.object,
}

export default component
