
import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
  render() {
    return (
        <input className="Input" {...this.props}/>
    );
  }
}

export default Input;
