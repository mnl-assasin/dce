import React, { useEffect, useCallback, useContext } from 'react'
import { AppContextObject } from '../../services/Providers/AppStateContext'
import { convertedPricePerValue } from '../../helper/computation'
import { navigate } from '../../services/navigation'
import { Page } from '../../layout'
import * as storage from '../../constants/storage'
import * as route from '../../constants/route'
import WalletButtons from './component/WalletButtons'
import WalletHeader from './component/WalletHeader'
import WalletContent from './component/WalletContent'
import init from './method/init'
import useStyles from './styles'

const navigationProps = {
  title: 'Wallet',
  backButton: true,
}

const component = props => {
  const appContext = useContext(AppContextObject)
  const classes = useStyles()
  const _send = useCallback(
    () => navigate(route.WALLET_SEND, { wallet: props.wallet }),
    [props.wallet]
  )
  const _history = useCallback(
    () => navigate(route.WALLET_HISTORY, { wallet: props.wallet }),
    [props.wallet]
  )
  const _walletReceice = useCallback(
    () => navigate(route.WALLET_RECEIVE, { wallet: props.wallet }),
    [props.wallet]
  )
  useEffect(() => init(appContext)(props.wallet), [props.wallet])
  return (
    <Page
      navigationProps={navigationProps}
      containerProps={{ style: { paddingLeft: 0, paddingRight: 0 } }}
    >
      <WalletHeader
        classes={classes}
        networkName={appContext[storage.ACTIVE_PROVIDER_NAME]}
        networkNumber={appContext[storage.ACTIVE_PROVIDER_BlOCKNUMBER]}
        coinPrice={appContext[storage.ETHER_PRICE]}
        // userName={props.wallet[storage.WALLET_USERNAME]}
        userName=""
        coinBase={props.wallet[storage.WALLET_COINBASE]}
      />
      <WalletContent
        classes={classes}
        amount={props.wallet[storage.WALLET_AMOUNT]}
        value={convertedPricePerValue(
          appContext[storage.ETHER_PRICE],
          props.wallet[storage.WALLET_AMOUNT]
        )}
      />
      <WalletButtons
        classes={classes}
        onWalletReceive={_walletReceice}
        onSend={_send}
        onHistory={_history}
      />
    </Page>
  )
}

export default component
