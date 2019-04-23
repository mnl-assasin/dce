import React, { useCallback, useContext } from 'react'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import { AppContextObject } from '../../services/Providers/AppStateContext'
import { useTextbox, useToggle } from '../../hook'
import { PrimaryButton, Text, InputTextBox } from '../../components'
import { navigate } from '../../services/navigation'
import { inputTypes } from '../../constants/types'
import { Padding, Page } from '../../layout'
import * as route from '../../constants/route'
import * as storage from '../../constants/storage'
import useStyles from './styles'

const navigationProps = {
  title: '',
  backButton: false,
}

const Login = props => {
  const appContext = useContext(AppContextObject)
  const classes = useStyles()
  const passwordState = useTextbox('')
  const isPasswordVisibleState = useToggle(false)
  const onSubmit = useCallback(() => {
    // TODO: dont know implemntation on this cause when use logout it clear all the db
    console.log('submitted', passwordState.value)
    if (!appContext[storage.PASSWORD]) {
      // throw new Error('no password set')
    }
    appContext.persist({
      [storage.IS_LOGGED]: true,
      // [WALLET_ADDRESS]: '0x0598aC83C088f126B3043059FCfd2E7A5F0886FF',
    })
    navigate(route.DASHBOARD)
    console.log('password', appContext[storage.PASSWORD])
    // storage.PASSWORD
  }, [passwordState, appContext])
  const onUseBackup = useCallback(() => navigate(route.RESTORE_BACKUP), [])

  return (
    <Page navigationProps={navigationProps}>
      <div className={classes.logo}>
        <span className={classes.logoText}>LOGIN</span>
      </div>

      <form className={classes.container} noValidate autoComplete="off">
        <InputTextBox
          value={passwordState.value}
          onChange={passwordState.onChange}
          placeholder="Enter Password"
        />
        <Padding bottom={4} top={16}>
          <PrimaryButton type="primary" onClick={onSubmit} fullWidth>
            LOG IN
          </PrimaryButton>
        </Padding>
      </form>
    </Page>
  )
}

export default Login
