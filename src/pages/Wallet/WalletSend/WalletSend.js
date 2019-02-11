import React, { Component } from 'react';
import { Page } from '../../../common'
import { Navbar } from '../../../components';
import './WalletSend.css';

class WalletSend extends Component {

  render() {
    return (
      <Page className="WalletSend">
        <Navbar/>
        <div className="Content">
          WalletSend Page
        </div>
      </Page>
    );
  }
}

export default WalletSend;
