import React, { useCallback, useContext, useState } from 'react'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import LocalGasStation from '@material-ui/icons/LocalGasStation'
import AddCircleOutline from '@material-ui/icons/AddCircleOutline'
import FileCopy from '@material-ui/icons/FileCopy'

import { Page } from '../../../layout'
import { estimateFee, sendWallet } from '../../../hof'
import { Row } from '../../../common'
import { useTextbox } from '../../../hook'
import { inputTypes } from '../../../constants/types'
import { AppContextObject } from '../../../services/Providers/AppStateContext'
import * as storage from '../../../constants/storage'
import useStyles from './styles'

// page setup
const title = '@blocksmith'
const subTitle = 'send'

const navigationProps = {
  title: title,
  backButton: true,
}

// methods
const TestWalletAddress = '0x14fe7926b260834b2d1a5124332deae9dcf20029'
// template
const WalletSend = props => {
  const appContext = useContext(AppContextObject)
  const classes = useStyles()
  const [fee, setFee] = useState('')
  const sendTo = useTextbox('')
  const amount = useTextbox('')
  const usd = useTextbox('')
  const gasLimit = useTextbox('')
  const transaction = useTextbox('')
  const yourAddresss = useTextbox(appContext[storage.WALLET_ADDRESS])
  const onClickEstimate = useCallback(
    () =>
      estimateFee(appContext)(
        {
          network: appContext[storage.ACTIVE_PROVIDER_ID],
          address: TestWalletAddress,
          value: amount.value,
        },
        ({ estimatedTotalString }) => setFee(estimatedTotalString)
      ),
    [amount.value]
  )
  const onClickSubmit = () => {
    console.log('submitted: ')
  }

  // const onClickSubmit = useCallback(() => sendWallet(appContext)({
  //   network: appContext[storage.ACTIVE_PROVIDER_ID],
  //   privateKey: appContext[storage.WALLET_PRIVATE_KEY],
  //   address: TestWalletAddress,
  //   value: amount.value,
  //   gasLimit: '21000',
  //   data: null
  // }, (result) =>console.log('sent: ', result)), [amount.value])

  return (
    <Page navigationProps={navigationProps}>
      <div className={classes.headerCoin}>
        <Typography variant="h4" gutterBottom>
          {subTitle}
        </Typography>
      </div>
      <form className={classes.container} noValidate autoComplete="off">
        <Row>
          <div className={classes.myWalletAddress}>
            <TextField
              title={yourAddresss.value}
              label={'Your Address ' + title}
              variant="outlined"
              className={classes.textField}
              value={yourAddresss.value}
              type={inputTypes.text}
            />
          </div>
          <div className={classes.addIcon}>
            <FileCopy fontSize="inherit" />
          </div>
        </Row>
        <Row>
          <div className={classes.sendTo}>
            <TextField
              name="sendTo"
              label="Send To"
              variant="outlined"
              className={classes.textField}
              type={inputTypes.text}
              {...sendTo}
            />
          </div>
          <div className={classes.addIcon}>
            <AddCircleOutline fontSize="inherit" />
          </div>
        </Row>
        <Row className={classes.textField}>
          <div className={classes.amount}>
            <TextField
              name="amount"
              label="Amount"
              variant="outlined"
              className={classes.textField}
              type={inputTypes.text}
              {...amount}
            />
          </div>
          <div className={classes.usd}>
            <TextField
              name="usd"
              label="USD"
              variant="outlined"
              className={classes.textField}
              type={inputTypes.text}
              {...usd}
            />
          </div>
        </Row>
        <Row>
          <div className={classes.gasLimit}>
            <TextField
              name="gasLimit"
              label="Gas Limit (recomended)"
              variant="outlined"
              className={classes.textField}
              type={inputTypes.text}
              {...gasLimit}
            />
          </div>
          <div className={classes.gasIcon}>
            <LocalGasStation fontSize="inherit">
              local_gas_station
            </LocalGasStation>
          </div>
        </Row>
        <TextField
          name="transaction"
          label="Tansaction Data (optional)"
          variant="outlined"
          className={classes.textField}
          type={inputTypes.text}
          {...transaction}
        />
        <Typography variant="caption" gutterBottom>
          estimate fee: {fee}
        </Typography>
        <div className={classes.buttonHolder}>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            onClick={onClickEstimate}
          >
            estimate
          </Button>

          <Button
            variant="outlined"
            color="primary"
            size="large"
            onClick={onClickSubmit}
          >
            send
          </Button>
        </div>
      </form>
    </Page>
  )
}

export default WalletSend
