import React, { useCallback, useContext } from 'react'

import { Wallet } from 'dapper'
import { Page, Padding } from '../../layout'
import { PrimaryButton, Text, Icon } from '../../components'
import { AppContextObject } from '../../services/Providers/AppStateContext'
import * as route from '../../constants/route'
import * as storage from '../../constants/storage'
import { goTo } from '../../services/navigation'
import { Dapper } from '../../asset'
import useStyles from './styles'

// page setup
// const title = 'Getting Started'
const navigationProps = {
  // title: title,
}

// methods
// const onClickGetStarted = () => goTo(route.MNEMONIC_PHRASE)
const onClickRestoreBackup = () => goTo(route.LOGOUT)

// template
const GetStarted = () => {
  const appContext = useContext(AppContextObject)
  const classes = useStyles()

  const onClickGetStarted = useCallback(async () => {
    try {
      const wallet = await Wallet.ethers.create()
      if (wallet.code === 200) {
        appContext.persist({
          // resting
          [storage.WALLET_MNEMONIC]: false,
          [storage.IS_SET_PASSWORD]: false,

          [storage.WALLET_MNEMONIC]: wallet.data.mnemonic,
          [storage.WALLET_ADDRESS]: wallet.data.address,
          [storage.WALLET_PRIVATE_KEY]: wallet.data.privateKey,
          [storage.WALLET_PUBLIC_KEY]: wallet.data.publicKey,
        })
      }
      // this.setState({
      //   mnemonic: wallet.data.mnemonic,
      //   isLoaded: true,
      //   wallet: wallet.data,
      // })
      goTo(route.MNEMONIC_PHRASE, { wallet })
    } catch (e) {
      console.log('error creating mnemonic', e)
      // this.setState({
      //   error: 'something wrong',
      //   isLoaded: true,
      // })
    }
  }, [])

  return (
    <Page navigationProps={navigationProps}>
      <div className={classes.logo}>
        <Padding top={30} bottom={150}>
          <Icon src={Dapper} size={120} />
        </Padding>
      </div>
      <div className={classes.buttonGroup}>
        <Padding vertical={5}>
          <PrimaryButton
            type="primary"
            size="medium"
            fullWidth
            onClick={onClickGetStarted}
          >
            Get Started
          </PrimaryButton>
        </Padding>
        <Padding vertical={5}>
          <PrimaryButton
            type="secondary"
            size="medium"
            fullWidth
            onClick={onClickRestoreBackup}
          >
            Restore Backup
          </PrimaryButton>
        </Padding>
      </div>
    </Page>
  )
}

export default GetStarted
