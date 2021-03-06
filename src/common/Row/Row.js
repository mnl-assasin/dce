
import React, { Component } from 'react';
import './Row.css';

class Row extends Component {

  render() {
    const props = { ...this.props }
    const className = props.className || ''
    
    let _style = {
      'flex': props.flex || 1,
      'justifyContent': props.justifyContent || 'flex-start',
      'alignItems': props.alignItems || 'stretch'
    }

    delete props.flex
    delete props.justifyContent
    delete props.alignItems
    delete props.className

    return (
        <div
          className={`Row ${className}`}
          style={_style}
          {...props}
        >
          {props.children}
        </div>
    );
  }
}

export default Row;
