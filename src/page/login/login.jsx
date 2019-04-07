import React, { useCallback } from 'react'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import { useTextbox, useToggle } from '../../hook'
import { PrimaryButton, Text, InputTextBox } from '../../components'
import { navigate } from '../../services/navigation'
import { inputTypes } from '../../constants/types'
import { Padding, Page } from '../../layout'
import * as route from '../../constants/route'
import useStyles from './styles'

const navigationProps = {
  title: '',
  backButton: false,
}

const Login = props => {
  const classes = useStyles()
  const passwordState = useTextbox('')
  const isPasswordVisibleState = useToggle(false)
  const onSubmit = useCallback(() => {
    // TODO: dont know implemntation on this cause when use logout it clear all the db
    console.log('submitted')
  }, [])
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
