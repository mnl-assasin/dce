import React, { Component } from 'react';
import './Page.css';

class Page extends Component {
	state = {
		show: false,
	}
	componentDidMount () {
		this.setState({show: true})
	}
  render() {
    return (
	      <div className={`Page ${this.props.className || ''}`}>
	        {this.props.children}
	      </div>
    );
  }
}

export default Page;
