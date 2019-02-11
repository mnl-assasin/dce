import React, { Component } from 'react';
import './Page.css';

class Page extends Component {
  render() {
    return (
      <div className={`Page ${this.props.className || ''}`}>
        {this.props.children}
      </div>
    );
  }
}

export default Page;
