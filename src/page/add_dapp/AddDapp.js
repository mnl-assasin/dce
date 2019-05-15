import React, { useCallback, useState, useContext } from 'react'
import { AppContextObject } from '../../services/Providers/AppStateContext'
import Radio from '@material-ui/core/Radio'
import { PrimaryButton, Text } from '../../components'
import classNames from 'classnames';
import { Padding, Page } from '../../layout'
import { displayTypes } from '../../constants/types'
import { propertyCount } from '../../helper/function'
import * as route from '../../constants/route'
import * as storage from '../../constants/storage'
import createHDWallet from '../../hof/create_hd_wallet'
import { navigate } from '../../services/navigation'
import useStyles from './styles'
import { TextField } from '@material-ui/core';
const navigationProps = {
  title: '',
  backButton: true,
}

export const AddDapp = props => {
  const appContext = useContext(AppContextObject)
  const classes = useStyles()
  const [value, valueSet] = useState('')
  const onSubmit = useCallback(() => console.log('submitted'), [])
  const onCreateEthWallet = useCallback(
    () => {
      createHDWallet(appContext)(
        // wallet mnemonic
        appContext[storage.USER_MNEMONIC],
        // path
        propertyCount(appContext[storage.USER_WALLETS]),
        // types
        value || displayTypes.default,
        navigate(route.DASHBOARD)
      )
    },
    [value]
  )

  return (
    <Page navigationProps={navigationProps}>
      <span className={classes.title}>Add ETH Dapp</span>
      <div style={{height: 400}}>
      <TextField
          id="standard-dense"
          label="Name"
          className={classNames(classes.textField)}
          margin="dense"
        />
        {/* <TextField
          id="filled-select-currency"
          select
          label="Select"
          className={classes.textField}
          value={this.state.currency}
          onChange={this.handleChange('currency')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your currency"
          margin="normal"
          variant="filled"
        >
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField> */}
        <TextField
          id="standard-dense"
          label="Address"
          className={classNames(classes.textField)}
          margin="dense"
        />
        <TextField
          id="standard-dense"
          label="ABI"
          className={classNames(classes.textField)}
          margin="dense"
        />
        
      </div>
      <Padding vertical={16}>
        <PrimaryButton type="primary" onClick={onCreateEthWallet} fullWidth>
          Add DApp
        </PrimaryButton>
      </Padding>
    </Page>
  )
}
