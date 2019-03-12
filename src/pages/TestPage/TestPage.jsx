import React, { Component } from 'react'
import { goTo } from '../../services/navigation'
import { Page, Col, Button } from '../../common'
import { Navbar } from '../../components'
import { WalletRepository } from 'dapper-js'

class TestPage extends Component {

  _onGetStarted = async () => {
    let result = WalletRepository.create()
    goTo('MnemonicPhrase', result)
  }

  _onRestoreBackup = () => {
    goTo('RestoreBackup')
  }

  render() {
    return (
      <Page className="GetStarted">
        <Navbar title="Test Page" />
        <div className="Content">
          <Col flex="1"><h1> Test Page</h1></Col>

          <Col flex="1">
            <div className="GetStarted--button-container">
              <Button color="primary" outline="true" onClick={this._onGetStarted}>
                Get Started
              </Button>
              
              <Button outline="true" onClick={this._onRestoreBackup}>
                Restore Backup
              </Button>
            </div>
          </Col>

        </div>
      </Page>
    )
  }
}

export default TestPage
