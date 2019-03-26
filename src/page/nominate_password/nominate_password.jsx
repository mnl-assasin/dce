import React, { useCallback, useContext } from 'react'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

import { Page } from '../../layout'
import { useTextbox, useToggle } from '../../hook'
import { inputTypes } from '../../constants/types'
import { AppContextObject } from '../../services/Providers/AppStateContext'
import submit from './method/submit'
import useStyles from './styles'
import { Divider, Text, InputTextBox, PrimaryButton } from '../../components'

// page setup
const title = 'Nominate Password'
const navigationProps = {
  backButton: true,
}

// methods

// template
const NominatePassword = props => {
  const appContext = useContext(AppContextObject)
  const classes = useStyles()
  const passwordState = useTextbox('')
  const passwordConfirmState = useTextbox('')
  const passwordVisivility = useToggle(false)
  const passwordConfirmVisivility = useToggle(false)
  const onClickSubmit = useCallback(
    () => submit(appContext)(passwordState.value, passwordConfirmState.value),
    [passwordState.value, passwordConfirmState.value]
  )
  return (
    <Page navigationProps={navigationProps}>
      <div className={classes.logo}>
        <Typography variant="h5">{title}</Typography>
      </div>
      <form className={classes.container} noValidate autoComplete="off">
        <div className={classes.description} />
        <InputTextBox
          placeholder="Enter Password"
          value={passwordState.value}
          onChange={passwordState.onChange}
          type={inputTypes.password}
        />
        <Divider size={1} />
        <InputTextBox
          placeholder="Enter Confirm Password"
          value={passwordConfirmState.value}
          onChange={passwordConfirmState.onChange}
          type={inputTypes.password}
        />
        <Divider size={1} />
        <PrimaryButton type="primary" onClick={onClickSubmit}>
          CONFIRM
        </PrimaryButton>
      </form>
    </Page>
  )
}

export default NominatePassword
