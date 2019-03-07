import React, { Component } from 'react'
import { goTo } from '../../services/navigation'
import { Page, Col, Button } from '../../common'
import { Navbar } from '../../components'
import { WalletRepository } from 'dapper-node'
import './GetStarted.css'

class GetStarted extends Component {

  async onClickGetStarted() {
    let result = WalletRepository.create()
    console.log(result)
    goTo('MnemonicPhrase', result)
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
              <Button color="primary" outline="true" onClick={this.onClickGetStarted.bind(this)}>
                Get Started
              </Button>
              
              <Button outline="true" onClick={this.onClickRestoreBackup.bind(this)}>
                Restore Backup
              </Button>
            </div>
          </Col>

        </div>
      </Page>
    )
  }
}

export default GetStarted
