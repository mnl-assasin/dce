import React, { useState, useEffect, useContext } from 'react'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { Page } from '../../layout'
import { AppContextObject } from '../../services/Providers/AppStateContext'
import * as storage from '../../constants/storage'
import useStyles from './styles'
import { Wallet } from 'dapper'
import CoinCard from './component/coin_card'

// page setup
const title = ''
const navigationProps = {
  title,
  backButton: true,
}

// methods

// template
const WalletHistory = props => {
  console.log(props)
  const appContext = useContext(AppContextObject)
  const classes = useStyles()
  const [histories, setHistories] = useState([])

  useEffect(() => {
    Wallet.ethers
      .history({
        network: appContext[storage.ACTIVE_PROVIDER_ID],
        address: props.wallet[storage.WALLET_ADDRESS],
      })
      .then(data => {
        console.log(data)
        setHistories(data.data)
      })
      .catch(error => {
        console.log('Index catch: ')
        console.log(error)
      })
  }, [])
  // will be clear later
  return (
    <Page navigationProps={navigationProps}>
      <div className={classes.pageHeader}>
        <div className={classes.pageHeaderTitle}>HISTORY FOR</div>
      <div className={classes.pageHeaderSubTitle}>{props.wallet[storage.WALLET_ADDRESS]}</div>
      </div>
      <List>
        {histories.length > 0
          ? histories.reverse().map((item, index) => {
              return (
                 <CoinCard key={index} item={item} classes={classes} address={props.wallet[storage.WALLET_ADDRESS]} />
              )
            })
          : null}
      </List>
    </Page>
  )
}

export default WalletHistory
