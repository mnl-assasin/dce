import React, { useCallback } from 'react'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import { useTextbox, useToggle } from '../../hook'
import { PrimaryButton, Text } from '../../components'
import { navigate } from '../../services/navigation'
import { inputTypes } from '../../constants/types'
import { Padding, Page } from '../../layout'
import * as route from '../../constants/route'
import useStyles from './styles'

const navigationProps = {
  title: 'Dapper Wallet',
  backButton: true,
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
        <Text variant="h3">login</Text>
      </div>

      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          label="Enter Password"
          variant="outlined"
          className={classes.textField}
          value={passwordState.value}
          onChange={passwordState.onChange}
          type={
            isPasswordVisibleState.value ? inputTypes.text : inputTypes.password
          }
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={isPasswordVisibleState.onChange}
                >
                  {isPasswordVisibleState.value ? (
                    <VisibilityOff />
                  ) : (
                    <Visibility />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Padding bottom={4} top={32}>
          <PrimaryButton type="primary" onClick={onSubmit} fullWidth>
            Confirm
          </PrimaryButton>
        </Padding>
        <Padding vertical={4}>
          <PrimaryButton type="secondary" onClick={onUseBackup} fullWidth>
            use backup phrase to login
          </PrimaryButton>
        </Padding>
      </form>
    </Page>
  )
}

export default Login
