import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

let alertDialogFn;

const Transition = (props) => {
  return <Slide direction="up" {...props} />;
}

class AlertDialog extends Component {
  constructor(props) {
    super(props)

    this.state = {
      show: false,
      payload: {}
    }
  }

  componentDidMount() {
    alertDialogFn = this.onHandleOpen.bind(this);
  }

  onHandleClose(onButtonClicked = null) {
    const onClose = this.state.payload.onClose || null;

    this.setState({
      show: false
    })

    if (typeof onButtonClicked === 'function') {
      return onButtonClicked();
    }

    if (typeof onClose === 'function') {
      return onClose();
    }
  }

  onHandleOpen(payload) {
    this.setState({
      show: true,
      payload
    })
  }

  _renderButtons() {
    let buttons = this.state.payload.buttons || [
      {
        text: 'Okay',
        color: 'primary',
        onClick: this.onHandleClose.bind(this)
      }
    ];

    return buttons.map( (button) => {
      return (
        <Button onClick={this.onHandleClose.bind(this, button.onClick)} color={button.color || 'primary' } key={button.text}>
          {button.text}
        </Button>
      )
    })
  }

  render() {
    const { show } = this.state
    const title = this.state.payload.title || 'Alert';
    const message = this.state.payload.message || null;

    return (
      <Dialog
        open={show}
        TransitionComponent={Transition}
        keepMounted
        onClose={this.onHandleClose.bind(this)}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {this._renderButtons()}
        </DialogActions>
      </Dialog>
    )
  }
}


export function alertDialog(payload) {
  alertDialogFn(payload);
}

export default AlertDialog;
