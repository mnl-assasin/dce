import React, { useCallback, useContext, useState } from 'react'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import LocalGasStation from '@material-ui/icons/LocalGasStation'
import AddCircleOutline from '@material-ui/icons/AddCircleOutline'
import FileCopy from '@material-ui/icons/FileCopy'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import InputBase from '@material-ui/core/InputBase'

import { AppContextObject } from '../../services/Providers/AppStateContext'
import { estimateFee, sendWallet } from '../../hof'
import * as storage from '../../constants/storage'
import { inputTypes } from '../../constants/types'
import { ContentCopy, Add } from '../../asset'
import { useTextbox } from '../../hook'
import { Page } from '../../layout'
import {
  Divider,
  Icon,
  InputTextBox,
  PrimaryButton,
  Text,
} from '../../components'
import { Row } from '../../common'
import Header from './component/header'
import useStyles from './styles'

const title = '@blocksmith'
const subTitle = 'send'

const WalletSend = props => {
  const appContext = useContext(AppContextObject)
  const classes = useStyles()
  const [fee, setFee] = useState('')
  const sendTo = useTextbox('')
  const amount = useTextbox('')
  const usd = useTextbox('')
  const gasLimit = useTextbox('')
  const transaction = useTextbox('')
  const yourAddresss = useTextbox(
    props.wallet ? props.wallet[storage.WALLET_ADDRESS] : ''
  )
  const onClickEstimate = useCallback(
    () =>
      estimateFee(appContext)(
        {
          network: appContext[storage.ACTIVE_PROVIDER_ID],
          address: sendTo.value,
          value: amount.value,
        },
        ({ estimatedTotalString }) => setFee(estimatedTotalString)
      ),
    [amount.value, sendTo.value]
  )
  const onClickSubmit = useCallback(
    () =>
      sendWallet(appContext)(
        {
          network: appContext[storage.ACTIVE_PROVIDER_ID],
          privateKey: props.wallet
            ? props.wallet[storage.WALLET_PRIVATE_KEY]
            : '',
          address: sendTo.value,
          value: amount.value,
          gasLimit: '21000',
          data: null,
        },
        result => console.log('sent: ', result)
      ),
    [sendTo.value, amount.value]
  )
  const navigationProps = {
    // title: props.wallet ? props.wallet[storage.WALLET_USERNAME] : '',
    title: '',
    backButton: true,
  }
  return (
    <Page navigationProps={navigationProps}>
      <Header title={yourAddresss.value} label={'Your Address ' + title} />
      <form className={classes.container} noValidate autoComplete="off">
        <InputTextBox
          {...sendTo}
          placeholder="Send To"
          hasIcon
          renderIcon={<Icon src={Add} size={25} />}
        />
        <Divider />
        <Row>
          <InputTextBox
            {...amount}
            placeholder="Amount"
            renderIcon={<Icon src={Add} size={25} hasIcon />}
          />
          <Divider />
          <InputTextBox
            {...usd}
            placeholder="USD"
            renderIcon={<Icon src={Add} size={25} hasIcon />}
          />
        </Row>
        <Divider />
        <InputTextBox
          {...gasLimit}
          placeholder="Gas Limit (recomended)"
          hasIcon
          renderIcon={
            <Icon
              onClick={onClickEstimate}
              iconName="local_gas_station"
              style={{ backgroundColorcolor: '#ee5791' }}
              size={25}
            />
          }
        />
        <Divider />
        <InputTextBox
          {...transaction}
          placeholder="Tansaction Data (optional)"
          renderIcon={<Icon src={Add} size={25} hasIcon />}
        />
        <Divider size={10} />
        <Typography variant="caption" gutterBottom>
          estimate fee: {fee}
        </Typography>
        <Divider size={10} />
        <PrimaryButton type="primary" onClick={onClickSubmit}>
          SEND
        </PrimaryButton>
      </form>
    </Page>
  )
}

export default WalletSend
// <InputBase
//   className={classes.textField}
//   variant="outlined"
//   type="text"
//   name="sendTo"
//   label="Send To"
//   {...sendTo}
//   InputProps={{
//     endAdornment: (
//       <InputAdornment position="end">
//         <Icon src={Add} size={25} />
//       </InputAdornment>
//     ),
//   }}
// />
//
// <Row>
//   <div className={classes.sendTo} />
//   <div className={classes.addIcon}>
//     <AddCircleOutline fontSize="inherit" />
//   </div>
// </Row>
// <Row className={classes.textField}>
//   <div className={classes.amount}>
//     <TextField
//       name="amount"
//       label="Amount"
//       variant="outlined"
//       className={classes.textField}
//       type={inputTypes.text}
//       {...amount}
//     />
//   </div>
//   <div className={classes.usd}>
//     <TextField
//       name="usd"
//       label="USD"
//       variant="outlined"
//       className={classes.textField}
//       type={inputTypes.text}
//       {...usd}
//     />
//   </div>
// </Row>
// <Row>
//   <div className={classes.gasLimit}>
//     <TextField
//       name="gasLimit"
//       label="Gas Limit (recomended)"
//       variant="outlined"
//       className={classes.textField}
//       type={inputTypes.text}
//       {...gasLimit}
//     />
//   </div>
//   <div className={classes.gasIcon}>
//     <LocalGasStation fontSize="inherit">
//       local_gas_station
//     </LocalGasStation>
//   </div>
// </Row>
// <TextField
//   name="transaction"
//   label="Tansaction Data (optional)"
//   variant="outlined"
//   className={classes.textField}
//   type={inputTypes.text}
//   {...transaction}
// />
// <Typography variant="caption" gutterBottom>
//   estimate fee: {fee}
// </Typography>
// <div className={classes.buttonHolder}>
//   <Button
//     variant="outlined"
//     color="primary"
//     size="large"
//     onClick={onClickEstimate}
//   >
//     estimate
//   </Button>
//
//   <Button
//     variant="outlined"
//     color="primary"
//     size="large"
//     onClick={onClickSubmit}
//   >
//     send
//   </Button>
// </div>
