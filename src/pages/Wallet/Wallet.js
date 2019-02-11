import React, { Component } from 'react';
import { Page } from '../../common'
import { Navbar } from '../../components';
import './Wallet.css';

class Wallet extends Component {

  render() {
    return (
      <Page className="Wallet">
        <Navbar/>

        <div className="Content">
          Wallet Page
        </div>
      </Page>
    );
  }
}

export default Wallet;
