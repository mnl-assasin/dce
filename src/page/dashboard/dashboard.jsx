import React, {
  useState,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from 'react'
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
import { setBalance, setEtherPrice, setWalletBalances } from '../../hof'
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

// here must be loaded to appcontext all wallets on first loaded,

const component = props => {
  const appContext = useContext(AppContextObject)
  const classes = useStyles()
  const onSelectWallet = useCallback(data => navigate('Wallet', data), [])
  const totalCoins = useMemo(
    () =>
      '$' +
      computeTotalCoinValue(
        appContext[storage.ETHER_PRICE],
        appContext[storage.USER_WALLETS]
      ).toFixed(2),
    // [appContext[storage.ETHER_PRICE], appContext[storage.USER_WALLETS]]
    [appContext[storage.ETHER_PRICE], appContext[storage.USER_WALLETS]] // test data
  )

  useEffect(
    () => {
      setWalletBalances(appContext, appContext[storage.ACTIVE_PROVIDER_ID])(
        wallets
      )
    },
    [appContext[storage.ACTIVE_PROVIDER_ID], wallets]
  )
  return (
    <Page>
      <WalletSection
        wallets={appContext[storage.USER_WALLETS]}
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
