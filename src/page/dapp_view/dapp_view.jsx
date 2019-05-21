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

const navigationProps = {
  title: '',
  backButton: true,
}

const component = props => {
  const appContext = useContext(AppContextObject)
  const classes = useStyles()
  const [_function, functionSet] = useState('default')
  const [_input, inputSet] = useState('')
  const onSubmit = useCallback(() => console.log('submitted'), [])
  const onCreateEthDapp = useCallback(() => {
    createDapp(appContext)(_function, _input, navigate(route.DASHBOARD))
  }, [_function, _input])

  const onDeleteDapp = useCallback(() => {
    // dlete
  }, [])

  return (
    <Page navigationProps={navigationProps}>
      <Header classes={classes} provider={'test provider'} name={'dapp name'} />
      {/* <div className={classes.container} /> */}
      <FormControl
        style={{
          marginTop: 4,
        }}
      >
        <Select value={_function} onChange={e => functionSet(e.target.value)}>
          <MenuItem value={'default'}>function</MenuItem>
          {/* {Object.keys(ProvidersOptions).map(k => (
            <MenuItem key={k} value={k}>
              {k}
            </MenuItem>
          ))}  */}
        </Select>
      </FormControl>
      <InputTextBox
        placeholder="Input"
        style={{
          marginTop: 4,
        }}
        type={inputTypes.textarea}
        // rows="4"
        value={_input}
        onChange={e => inputSet(e.target.value)}
        type={inputTypes.textarea}
      />

      <Padding vertical={16}>
        <PrimaryButton type="primary" onClick={onCreateEthDapp} fullWidth>
          Add Dapp
        </PrimaryButton>

        <Padding vertical={8}>
          <PrimaryButton type="secondary" onClick={onDeleteDapp} fullWidth>
            Delete
          </PrimaryButton>
        </Padding>
      </Padding>
    </Page>
  )
}

export default component
