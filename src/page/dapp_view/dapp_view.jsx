import React, { useCallback, useState, useContext } from 'react'
import { AppContextObject } from '../../services/Providers/AppStateContext'
import Radio from '@material-ui/core/Radio'
import Select from '@material-ui/core/Select'
import Input from '@material-ui/core/Input'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import FilledInput from '@material-ui/core/FilledInput'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'

import { PrimaryButton, Text, InputTextBox } from '../../components'
import { Padding, Page } from '../../layout'
import { displayTypes, inputTypes } from '../../constants/types'
import { propertyCount } from '../../helper/function'
import * as route from '../../constants/route'
import * as storage from '../../constants/storage'
import createHDWallet from '../../hof/create_hd_wallet'
import { navigate } from '../../services/navigation'
import useStyles from './styles'
import { ProvidersOptions } from '../../constants/provider'
import createDapp from '../../hof/create_dapp'
import Header from './component/header'
import Result from './component/result'
import Session from './component/session'
import { trimAddress, getWalletBalance } from '../../helper/wallet'
import send_dapp from '../../hof/send_dapp'

const navigationProps = {
  title: '',
  backButton: true,
}

const component = props => {
  const appContext = useContext(AppContextObject)
  const classes = useStyles()
  const [_account, accountSet] = useState('default')
  const [_function, functionSet] = useState('default')
  const [_input, inputSet] = useState('')
  const item = appContext[storage.USER_DAPP][props._id] || {}
  // console.log('item', item)

  const onCreateEthDapp = useCallback(() => {
    // createDapp(appContext)(_function, _input, navigate(route.DASHBOARD))
    console.log('_function, _input', _function, _input)
  }, [_function, _input])

  const onDeleteDapp = useCallback(() => {
    console.log('deleting', props._id)
  }, [])

  const wallets = appContext[storage.USER_WALLETS] || {}

  const onSubmit = useCallback(() => {
    console.log(_account, _function, _input)
    send_dapp(appContext)({
      privateKey: _account,
      network: item[storage.DAPP_NETWORK],
      address: item[storage.DAPP_ADDRESS],
      abi: item[storage.DAPP_ABI],
      method: _function,
      params: _input,
    })
  }, [_account, _function, _input])

  return (
    <Page navigationProps={navigationProps}>
      <Header
        classes={classes}
        provider={item[storage.DAPP_NETWORK]}
        name={item.name}
      />
      <div className={classes.container}>
        <FormControl
          style={{
            marginTop: 4,
          }}
          fullWidth
        >
          <Select value={_account} onChange={e => accountSet(e.target.value)}>
            <MenuItem value={'default'}>Account</MenuItem>
            {Object.keys(wallets).map(k => (
              <MenuItem key={k} value={wallets[k][storage.WALLET_PRIVATE_KEY]}>
                {trimAddress(k)}({getWalletBalance(appContext, k)})
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className={classes.container}>
        <FormControl
          style={{
            marginTop: 4,
          }}
          fullWidth
        >
          <Select value={_function} onChange={e => functionSet(e.target.value)}>
            <MenuItem value={'default'}>function</MenuItem>
            {item[storage.DAPP_ABI].map &&
              item[storage.DAPP_ABI].map(k => (
                <MenuItem key={k.name} value={k.name}>
                  {k.name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </div>
      <InputTextBox
        placeholder="Input"
        style={{
          marginTop: 4,
        }}
        // rows="4"
        value={_input}
        onChange={e => inputSet(e.target.value)}
        type={inputTypes.text}
      />
      <Padding vertical={8}>
        <PrimaryButton type="primary" onClick={onSubmit} fullWidth>
          Send
        </PrimaryButton>

        <Padding vertical={8}>
          <PrimaryButton type="secondary" onClick={onDeleteDapp} fullWidth>
            Delete
          </PrimaryButton>
        </Padding>
      </Padding>
      <Result classes={classes} name="GetAmount" result={0.0123} time="1 min" />
      <Session
        classes={classes}
        sessions={[{ name: 'GetAmount', result: 0.0123, time: '1 min' }]}
      />
    </Page>
  )
}

export default component
