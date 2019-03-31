import React, { useCallback, useContext } from 'react'
import { PrimaryButton, Text, Icon } from '../../components'
import { navigate } from '../../services/navigation'
import { Padding, Page } from '../../layout'
import * as route from '../../constants/route'
import * as storage from '../../constants/storage'
import useStyles from './styles'
import { AppContextObject } from '../../services/Providers/AppStateContext'
import { propertyCount } from '../../helper/function'
import createHDWallet from '../../hof/create_hd_wallet'
import { Dapper } from '../../asset'

const navigationProps = {
  title: '', // Add Wallet
  backButton: true,
}

const component = props => {
  const appContext = useContext(AppContextObject)
  const classes = useStyles()
  const onCreateEthWallet = useCallback(() => {
    createHDWallet(appContext)(
      // wallet mnemonic
      appContext[storage.USER_MNEMONIC],
      // path
      propertyCount(appContext[storage.USER_WALLETS]),
      navigate(route.DASHBOARD)
    )
  }, [])
  const onCreateERC20 = useCallback(() => {
    console.log('onCreateERC20')
  }, [])
  const onCreateEthDapp = useCallback(() => {
    console.log('onCreateERC20')
  }, [])

  return (
    <Page navigationProps={navigationProps}>
      <div className={classes.logo}>
        <Padding top={30} bottom={150}>
          <Icon src={Dapper} size={120} />
        </Padding>
      </div>
      <Padding vertical={4}>
        <PrimaryButton type="primary" onClick={onCreateEthWallet} fullWidth>
          ETH Wallet
        </PrimaryButton>
      </Padding>
      <Padding vertical={4}>
        <PrimaryButton type="primary" onClick={onCreateERC20} fullWidth>
          ERC20
        </PrimaryButton>
      </Padding>
      <Padding vertical={4}>
        <PrimaryButton type="primary" onClick={onCreateEthDapp} fullWidth>
          ETH DAPP
        </PrimaryButton>
      </Padding>
    </Page>
  )
}

export default component
