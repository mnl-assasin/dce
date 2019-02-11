import React, { Component } from 'react';
import { goTo } from '../../services/navigation';
import { Page, Col, Button } from '../../common'
import { Navbar, showLoading, hideLoading } from '../../components';
import axios from '../../services/crypto-axios';
import apiConfig from '../../configs/api';
import './GetStarted.css';

class GetStarted extends Component {

  async onClickGetStarted() {
    try {

      showLoading();

      let result = await axios.get(`${apiConfig.API}/v2/wallet/create`)
      
      hideLoading();

      goTo('MnemonicPhrase', result.data)

    } catch(e) {
      console.error(e)
    }
  }

  onClickRestoreBackup() {
    goTo('RestoreBackup')
  }

  render() {
    return (
      <Page className="GetStarted">
        <Navbar/>
        <div className="Content">
          <Col flex="1"></Col>

          <Col flex="1">
            <div className="GetStarted--button-container">
              <Button color="primary" outline={true} onClick={this.onClickGetStarted.bind(this)}>
                Get Started
              </Button>
              
              <Button outline={true} onClick={this.onClickRestoreBackup.bind(this)}>
                Restore Backup
              </Button>
            </div>
          </Col>

        </div>
      </Page>
    );
  }
}

export default GetStarted;
