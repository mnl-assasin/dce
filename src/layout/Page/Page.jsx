import React from 'react'
import Proptypes from 'prop-types'

const component = ({ classes, ...props }) => (
    <div className={classes.root} {...props} />
)

component.defaultProps = {
  classes: {},
}

component.propTypes = {
  classes: Proptypes.object,
}

export default component
