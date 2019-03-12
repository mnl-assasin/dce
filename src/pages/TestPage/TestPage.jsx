import React, { Component } from 'react'


import { goTo } from '../../services/navigation'
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Page from '../../layout/Page'
import { Navbar } from '../../components'
import { Wallet } from 'dapper-js'

class TestPage extends Component {

  _onGetStarted = async () => {
    console.log(Wallet)
    Wallet.ethers
      .restore({
        mnemonic:
          "crunch soldier universe crunch flight clip urge chalk giant silver rug tank1"
      })
      .then(data => {
        console.log(data);
    console.log(Wallet)
      })
      .catch(error => {
        console.log("Index catch: ");
        console.log(error);
      });

      }

  _onRestoreBackup = async() => {
    const walletHelper = Wallet.ethers.getHelper()
    console.log(walletHelper)
    
    const getProvider = await walletHelper.getProvider()
console.log(getProvider)

  }

  goto(str) {
    goTo(str)
  }

  render() {
    return (
      <Page>
        <Navbar title="Test Page" />
        <div className="Content">
        <Divider />
              <Button variant="outlined" color="primary" outline="true" onClick={this._onGetStarted} fullWidth>
                Get Started
              </Button>
              
        <Divider />
              <Button variant="outlined" onClick={this._onRestoreBackup} fullWidth>
                Restore Backup
              </Button>

        </div>
      </Page>
    )
  }
}

export default TestPage
