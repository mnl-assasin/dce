
import React, { Component } from 'react';
import './FullScreenLoading.css';

let showLoadingFn,
    hideLoadingFn;

class FullScreenLoading extends Component {

  constructor(props) {
    super(props);

    this.state = {
      show: false
    }
  }

  componentDidMount() {
    showLoadingFn = this.showLoading.bind(this);
    hideLoadingFn = this.hideLoading.bind(this);
  }

  showLoading = () => {
    this.setState({
      show: true,
    });
  };

  hideLoading = () => {
    this.setState({
      show: false,
    });
  }

  render() {
    const props = { ...this.props }

    if (!this.state.show) {
      return null
    }

    return (
        <div
          className={`FullScreenLoading`}
          {...props}

        >
          <div className="FullScreenLoading--content">
            Loading...
          </div>
        </div>
    );
  }
}

export function showLoading() {
  showLoadingFn();
}

export function hideLoading() {
  hideLoadingFn();
}

export default FullScreenLoading;
