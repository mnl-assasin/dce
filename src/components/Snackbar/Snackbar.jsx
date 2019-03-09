import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

import styles from './styles'

let showSnackbarFn

class Snackbars extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
      message: '',
      variant: 'success'
    }
  }

  componentDidMount() {
    showSnackbarFn = this.onHandleOpen.bind(this)
  }

  onHandleOpen(payload) {
    this.setState({
      open: true,
      ...payload
    })
  }

  handleClick = () => {
    this.setState({ open: true })
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    this.setState({ open: false })
  }

  render() {
    const { classes } = this.props
    return (
      <div>
        <Snackbar
          open={this.state.open}
          aria-describedby="client-snackbar"
          autoHideDuration={3000}
          onClose={this.handleClose}
          message={
            <span id="client-snackbar" className={classes.message}>
              {this.state.message}
            </span>
          }
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon className={classes.icon} />
            </IconButton>
          ]}
        />
      </div>
    )
  }
}

export function showSnackbar(payload) {
  showSnackbarFn(payload)
}

Snackbars.propTypes = {
  classes: PropTypes.object.isRequired // withStyles
}

export default withStyles(styles)(Snackbars)
