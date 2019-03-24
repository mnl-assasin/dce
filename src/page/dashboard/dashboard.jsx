import React, { useState, useCallback, useContext, useMemo } from 'react'
import {
  PrimaryButton,
  SmallButton,
  FabButton,
  CardWallet,
  CardDapp,
  Navbar,
  Text,
} from '../../components'
import { Page, Padding, Tab, TabContent } from '../../layout'
import { setBalance, setEtherPrice } from '../../hof'
import { computeTotalCoinValue } from '../../helper/computation'
import { Icon as ThemeIcon } from '../../common'
import { AppContextObject } from '../../services/Providers/AppStateContext'
import { navigate } from '../../services/navigation'
import * as storage from '../../constants/storage'
import WalletSection from './component/wallet_section'
import DappSection from './component/dapp_section'
import useStyles from './styles'
import { wallets } from './data'
import './Dashboard.scss'

// setEtherPrice = setEtherPrice(this)
// setBalance = setBalance(this)
// this.setBalance(
//   this.props.AppContext[this.storage.ACTIVE_PROVIDER_ID],
//   this.props.AppContext[this.storage.WALLET_ADDRESS],
//   value => this.setState({ amount: value })
// )
//

// here must be loaded to appcontext all wallets on first loaded,

const component = props => {
  const appContext = useContext(AppContextObject)
  const classes = useStyles()
  const totalCoins = useMemo(
    () => '$' + computeTotalCoinValue(appContext[storage.ETHER_PRICE], wallets),
    // [appContext[storage.ETHER_PRICE], appContext[storage.USER_WALLETS]]
    [appContext[storage.ETHER_PRICE], wallets]
  )

  // const [error, setError] = useState('')
  const onSelectWallet = useCallback(data => navigate('Wallet', data), [])
  // const onSetActive = useCallback(
  //   setIsActive(appContext, navigate, setBlockNumber(appContext), setError),
  //   []
  // )
  console.log(appContext)
  console.log(totalCoins)
  return (
    <Page>
      <WalletSection
        wallets={wallets}
        totalCoins={totalCoins}
        onPress={onSelectWallet}
        coinPrice={appContext[storage.ETHER_PRICE]}
      />
      <DappSection />

      <Padding vertical={12} />
      <Padding vertical={8} name="button-group">
        <PrimaryButton fullWidth type="primary">
          record recovery
        </PrimaryButton>
      </Padding>
      <Padding vertical={8}>
        <PrimaryButton fullWidth type="secondary">
          backup on chain
        </PrimaryButton>
      </Padding>
    </Page>
  )
}

export default component
