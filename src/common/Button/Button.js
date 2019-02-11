
import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
    const {
      round,
      color,
      outline
    } = this.props;

    const _styles = {
      'borderRadius': round ? '50%' : '10px'
    }

    const _outline = outline ? 'outline' : '' 

    return (
        <button className={`Button ${color || 'primary'} ${_outline}`} {...this.props} style={_styles}>
          {this.props.children}
        </button>
    );
  }
}

export default Button;
