import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'

const component = ({ classes, count = null, title = '', ...props }) => {
  return (
    <Button className={classes.root} {...props} fullWidth>
      <div className={classes.labelHolder}>
        <span className={classes.label}>{title}</span>
      </div>
      &nbsp;
      {count === null ? null : (
        <div className={classes.countHolder}>
          <span className={classes.count}>{count}</span>
        </div>
      )}
    </Button>
  )
}

component.propTypes = {
  classes: PropTypes.object.isRequired, // withStyles
}

export default component
