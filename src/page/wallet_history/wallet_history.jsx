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
const title = 'Wallet History'
const navigationProps = {
  title,
  backButton: true,
}

// methods

// template
const WalletHistory = props => {
  const appContext = useContext(AppContextObject)
  const classes = useStyles()
  const [histories, setHistories] = useState([])

  useEffect(() => {
    console.log('props.wallet', props.wallet)
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
      <div className={classes.logo}>
        <Typography variant="h5">ETH</Typography>
      </div>
      <List>
        {histories.length > 0
          ? histories.reverse().map((item, index) => {
              return (
                <ListItem key={index}>
                  <ListItemText
                    primary={
                      '' +
                      moment(1552795756).format('LLL') +
                      ' - ' +
                      item.confirmations +
                      ' - ' +
                      item.value
                    }
                    secondary={item.from}
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
