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
  const _id = props._id
  const appContext = useContext(AppContextObject)
  const classes = useStyles()
  const [_account, accountSet] = useState('default')
  const [_function, functionSet] = useState('default')
  const [_input, inputSet] = useState('')
  const [_result, resultSet] = useState(null)
  const item = appContext[storage.USER_DAPP][props._id] || {}
  // console.log('item', item)

  // [{ name: 'GetAmount', result: 0.0123, time: '1 min' }]
  const dapp_history =
    appContext[storage.DAPP_SESSION_HISTORY][props._id] || null

  let userDapp = appContext[storage.USER_DAPP]

  if (!_id) {
    navigate(route.DASHBOARD)
  }

  const onCreateEthDapp = useCallback(() => {
    // createDapp(appContext)(_function, _input, navigate(route.DASHBOARD))
    console.log('_function, _input', _function, _input)
  }, [_function, _input])

  const onDeleteDapp = useCallback(() => {
    delete userDapp[_id]
    appContext.persist(
      {
        [storage.USER_DAPP]: { ...userDapp },
      },
      () => navigate(route.DASHBOARD)
    )
  }, [userDapp])

  const wallets = appContext[storage.USER_WALLETS] || {}

  const currentHistory = appContext[storage.DAPP_SESSION_HISTORY][_id] || []
  const onSubmit = useCallback(() => {
    console.log(_account, _function, _input)
    send_dapp(appContext)(
      {
        privateKey: _account,
        network: item[storage.DAPP_NETWORK],
        address: item[storage.DAPP_ADDRESS],
        abi: item[storage.DAPP_ABI],
        method: _function,
        params: _input,
      },
      data => {
        const resultData = {
          data: data,
          name: _function,
          time: new Date().getTime(),
        }
        resultSet(resultData)
        appContext.persist({
          [storage.DAPP_SESSION_HISTORY]: {
            ...appContext[storage.DAPP_SESSION_HISTORY],
            [_id]: {
              resultData,
              ...appContext[storage.DAPP_SESSION_HISTORY][_id],
            },
          },
        })
      },
      data => {
        const resultData = {
          data: data,
          name: _function,
          time: new Date().getTime(),
        }
        resultSet(resultData)
        appContext.persist({
          [storage.DAPP_SESSION_HISTORY]: {
            ...appContext[storage.DAPP_SESSION_HISTORY],
            [_id]: [resultData, ...currentHistory],
          },
        })
      }
    )
  }, [_account, _function, _input, resultSet, currentHistory])

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
            {item[storage.DAPP_ABI] &&
              item[storage.DAPP_ABI].map &&
              item[storage.DAPP_ABI].map((k, i) => (
                <MenuItem key={i} value={k.name}>
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
      {_result && (
        <Result
          classes={classes}
          name={_result.name}
          result={_result.data}
          time={_result.time}
        />
      )}

      {dapp_history && <Session classes={classes} sessions={dapp_history} />}
    </Page>
  )
}

export default component
