import React, {
  useState,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from 'react'
import { PrimaryButton } from '../../components'
import { Page, Padding } from '../../layout'
import { setWalletBalances } from '../../hof'
import { computeTotalCoinValue } from '../../helper/computation'
import { AppContextObject } from '../../services/Providers/AppStateContext'
import { navigate } from '../../services/navigation'
import * as storage from '../../constants/storage'
import * as route from '../../constants/route'
import DappSection from './component/dapp_section'
// import useStyles from './styles'
import WalletSection from './component/wallet_section'
import { wallets } from './data'
import createHDWallet from '../../hof/create_hd_wallet'
import { propertyCount } from '../../helper/function'
import './Dashboard.scss'

// here must be loaded to appcontext all wallets on first loaded,

const component = props => {
  const appContext = useContext(AppContextObject)
  const [isLoading, isLoadingSet] = useState(true)
  // const classes = useStyles()
  const onSelectWallet = useCallback(data => navigate('Wallet', data), [])
  const onCreateWallet = useCallback(
    () => {
      createHDWallet(appContext)(
        // wallet mnemonic
        appContext[storage.USER_MNEMONIC],
        // path
        propertyCount(appContext[storage.USER_WALLETS])
      )
    },
    [
      appContext[storage.USER_MNEMONIC],
      propertyCount(appContext[storage.USER_WALLETS]),
    ]
  )
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
        appContext[storage.USER_WALLETS]
      )
      isLoadingSet(false)
    },
    [appContext[storage.ACTIVE_PROVIDER_ID]]
  )
  console.log(appContext)
  if (isLoading) {
    return <span>loading...</span>
  }
  return (
    <Page>
      <WalletSection
        wallets={appContext[storage.USER_WALLETS]}
        totalCoins={totalCoins}
        onPress={onSelectWallet}
        coinPrice={appContext[storage.ETHER_PRICE]}
        onCreateWallet={onCreateWallet}
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
