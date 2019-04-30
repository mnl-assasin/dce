import React, { useCallback, useContext } from 'react'
import Typography from '@material-ui/core/Typography'

import { Page, Padding } from '../../layout'
import { useTextbox, useToggle } from '../../hook'
import { inputTypes } from '../../constants/types'
import { AppContextObject } from '../../services/Providers/AppStateContext'
import submit from './method/submit'
import useStyles from './styles'
import { Divider, InputTextBox, PrimaryButton, Text } from '../../components'

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
  const onClickSubmit = useCallback(
    () => submit(appContext)(passwordState.value, passwordConfirmState.value),
    [passwordState.value, passwordConfirmState.value]
  )
  return (
    <Page navigationProps={navigationProps}>
      <div className={classes.header}>
        <span className={classes.logoText}>NOMINATE LOCAL PASSWORD</span>
      </div>
      <form
        className={classes.container}
        noValidate
        autoComplete="off"
        onClick={onClickSubmit}
      >
        <Text variant="caption" className={classes.desc} gutterBottom>
          This password is only for this device. Your mnemonic phrase is that
          you will use to restore your account if you lose your password or load
          your wallet onto a new device
        </Text>
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
        <Padding top={16}>
          <PrimaryButton type="primary" fullWidth>
            SAVE
          </PrimaryButton>
        </Padding>
      </form>
    </Page>
  )
}

export default NominatePassword
