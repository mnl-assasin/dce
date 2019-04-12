import React, { useState, useEffect, useContext } from 'react'
import moment from 'moment'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { Page } from '../../layout'
import { AppContextObject } from '../../services/Providers/AppStateContext'
import * as storage from '../../constants/storage'
import useStyles from './styles'
import { Wallet } from 'dapper'

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
      <div className={classes.coinCard}>
        <div className={classes.coinTitleContainer}>
          <span className={classes.coinTitleHeader}>SENT</span>
          <span className={classes.coinTileValue}>0.0534234234 ETH</span>
        </div>
        <div className={classes.cardContentHolder}>
          <span className={classes.address}>0X34234...54ERER</span>
          <span className={classes.date}>THU FEB 28. 2019 5:56 AM</span>
        </div>
      </div>
      <List>
        {histories.length > 0
          ? histories.reverse().map((item, index) => {
              return (
                <ListItem key={index}>
                  <ListItemText
                    primary={
                      '' +
                      moment(item.timestamp).format('LLL') +
                      ' - ' +
                      item.confirmations +
                      ' - ' +
                      item.value
                    }
                    secondary={item.hash}
                  />
                </ListItem>
              )
            })
          : null}
      </List>
    </Page>
  )
}

export default WalletHistory
