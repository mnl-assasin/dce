import React  from 'react'
import PropTypes from "prop-types";

import { Wallet } from 'dapper-js'

import BasePage from "../../common/BasePage"
import { goTo } from '../../services/navigation'
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Page from '../../layout/Page'
import { Navbar } from '../../components'
import { withAppContext } from "../../services/Providers/AppStateContext";


// from doc
const mnemonic = "crunch soldier universe crunch flight clip urge chalk giant silver rug tank"



class TestPage extends BasePage {
  title = 'TestPage'
  // store = BasePage.store
  defaults = BasePage.constants.defaults
  storage = BasePage.constants.storage

   componentDidMount () {
     console.log(this.props)
   }

  _onGetStarted = async () => {
    console.log(Wallet)
    Wallet.ethers
      .restore({
        mnemonic:
          "crunch soldier universe crunch flight clip urge chalk giant silver rug tank"
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
    let wallet
    try {
      wallet = await Wallet.ethers.restore({mnemonic})
      if (wallet.code === 200) {
        this.props.AppContext.persist({
          [this.storage.WALLET_MNEMONIC]: wallet.data.mnemonic,
          [this.storage.WALLET_ADDRESS]: wallet.data.address,
          [this.storage.WALLET_PRIVATE_KEY]: wallet.data.privateKey,
          [this.storage.WALLET_PUBLIC_KEY]: wallet.data.publicKey
        })

      } else {
        throw new Error('no valid wallet data')
      }
    } catch(e) {
      console.log('error in restoring backup', e)
    }
     
     console.log(wallet)
  }

  goto(str) {
    goTo(str)
  }

  loadAppState = () => {
     console.log(this.props.AppContext)
   
  }


  printWallet = async() => {
    const walletHelper = Wallet.ethers.getHelper()

    // getting balance
    const balance = await  Wallet.ethers.balance({
      provider: "mainnet",
        address: this.props.AppContext[this.storage.WALLET_ADDRESS]
      })
     console.log(balance)
     console.log(Wallet.ethers)
     console.log(walletHelper)
     console.log(walletHelper.getProvider())
  
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
        <Divider />
              <Button variant="outlined" onClick={() => console.log(this.props.AppContext)} fullWidth>
                loadAppState
              </Button>
        <Divider />
              <Button variant="outlined" onClick={this.printWallet} fullWidth>
                print wallet
              </Button>


        </div>
      </Page>
    )
  }
}

TestPage.propTypes = {
  AppContext: PropTypes.object.isRequired, // withAppContext
  // classes: PropTypes.object.isRequired // withStyles
};

export default withAppContext(TestPage)
