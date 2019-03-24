import React, { useState, useCallback, useContext } from 'react'
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
import { convertedPricePerValue } from '../../helper/computation'
import { Icon as ThemeIcon } from '../../common'
import { AppContextObject } from '../../services/Providers/AppStateContext'
import WalletSection from './component/wallet_section'
import DappSection from './component/dapp_section'
import useStyles from './styles'
import { walletItems } from './data'
import './Dashboard.scss'

// setEtherPrice = setEtherPrice(this)
// setBalance = setBalance(this)
// this.setBalance(
//   this.props.AppContext[this.storage.ACTIVE_PROVIDER_ID],
//   this.props.AppContext[this.storage.WALLET_ADDRESS],
//   value => this.setState({ amount: value })
// )
//

const component = props => {
  const appContext = useContext(AppContextObject)
  const classes = useStyles()
  // const [error, setError] = useState('')
  // const onGetIsActive = useCallback(getIsActive(appContext), [])
  // const onSetActive = useCallback(
  //   setIsActive(appContext, navigate, setBlockNumber(appContext), setError),
  //   []
  // )
  return (
    <Page>
      <WalletSection />
      <DappSection />

      <Padding vertical={12} />
      <Padding vertical={8}>
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
