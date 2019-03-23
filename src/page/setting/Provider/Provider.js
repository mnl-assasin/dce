import React, { Component } from 'react';
import { Page } from '../../../common'
import { Navbar } from '../../../components';
import './Provider.css';

class Provider extends Component {

  render() {
    return (
      <Page className="Provider">
        <Navbar/>
        <div className="Content">
          Provider Page
        </div>
      </Page>
    );
  }
}

export default Provider;