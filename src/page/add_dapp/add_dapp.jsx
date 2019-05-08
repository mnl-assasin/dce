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
import { displayTypes } from '../../constants/types'
import { propertyCount } from '../../helper/function'
import * as route from '../../constants/route'
import * as storage from '../../constants/storage'
import createHDWallet from '../../hof/create_hd_wallet'
import { navigate } from '../../services/navigation'
import useStyles from './styles'
const navigationProps = {
  title: '',
  backButton: true,
}

const component = props => {
  const appContext = useContext(AppContextObject)
  const classes = useStyles()
  const [value, valueSet] = useState('')
  const onSubmit = useCallback(() => console.log('submitted'), [])
  const onCreateEthWallet = useCallback(() => {
    // createHDWallet(appContext)(
    //   // wallet mnemonic
    //   appContext[storage.USER_MNEMONIC],
    //   // path
    //   propertyCount(appContext[storage.USER_WALLETS]),
    //   // types
    //   value || displayTypes.default,
    //   navigate(route.DASHBOARD)
    // )
  }, [value])

  return (
    <Page navigationProps={navigationProps}>
      <span className={classes.title}>Add ETH Dapp</span>
      {/* <div className={classes.container} /> */}
      <InputTextBox
        placeholder="Name"
        style={{
          marginTop: 4,
        }}
        // value={passwordConfirmState.value}
        // onChange={passwordConfirmState.onChange}
        // type={inputTypes.password}
        // onKeyPress={onEnter}
      />
      <FormControl
        style={{
          marginTop: 4,
        }}
      >
        <Select
          value={10}
          style={
            {
              // paddingLeft: 8,
              // paddingRight: 8,
            }
          }

          // onChange={this.handleChange}
          // inputProps={{
          //   name: 'age',
          //   id: 'age-simple',
          // }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <InputTextBox
        placeholder="Address"
        style={{
          marginTop: 4,
        }}
        // value={passwordConfirmState.value}
        // onChange={passwordConfirmState.onChange}
        // type={inputTypes.password}
        // onKeyPress={onEnter}
      />
      <InputTextBox
        placeholder="ABI"
        style={{
          marginTop: 4,
        }}
        // value={passwordConfirmState.value}
        // onChange={passwordConfirmState.onChange}
        // type={inputTypes.password}
        // onKeyPress={onEnter}
      />
      <Padding vertical={16}>
        <PrimaryButton type="primary" onClick={onCreateEthWallet} fullWidth>
          Add Dapp
        </PrimaryButton>
      </Padding>
    </Page>
  )
}

export default component
