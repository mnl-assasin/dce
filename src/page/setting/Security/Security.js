import React, { Component } from 'react';
import { Page } from '../../../common'
import { Navbar } from '../../../components';
import './Security.css';

class Security extends Component {

  render() {
    return (
      <Page className="Security">
        <Navbar/>
        <div className="Content">
          Security Page
        </div>
      </Page>
    );
  }
}

export default Security;