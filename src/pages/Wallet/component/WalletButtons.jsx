import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'

const component = ({ classes, onWalletReceive }) => (
  <div className={classes.buttonContainer}>
    <div className={classes.buttonHolder}>
      <Button
        variant="outlined"
        color="primary"
        className="Button"
        size="large"
      >
        Send
      </Button>
    </div>
    <div className={classes.buttonHolder}>
      <Button
        variant="outlined"
        color="primary"
        className="Button"
        size="large"
        onClick={onWalletReceive}
      >
        Receive
      </Button>
    </div>

    <div className={classes.buttonHolder}>
      <Button
        variant="outlined"
        color="primary"
        className="Button"
        size="large"
      >
        Deploy
      </Button>
    </div>

    <div className={classes.buttonHolder}>
      <Button
        variant="outlined"
        color="primary"
        className="Button"
        size="large"
      >
        History
      </Button>
    </div>

    <div className={classes.buttonHolder}>
      <Button
        variant="outlined"
        color="secondary"
        className="Button"
        size="large"
      >
        Get Handle
      </Button>
    </div>
  </div>
)

component.defaultProps = {}

component.propTypes = {
  onWalletReceive: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
}

export default component
