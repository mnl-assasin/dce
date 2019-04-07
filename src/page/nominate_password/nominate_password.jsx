import React, { useCallback, useContext } from 'react'
import Typography from '@material-ui/core/Typography'

import { Page, Padding } from '../../layout'
import { useTextbox, useToggle } from '../../hook'
import { inputTypes } from '../../constants/types'
import { AppContextObject } from '../../services/Providers/AppStateContext'
import submit from './method/submit'
import useStyles from './styles'
import { Divider,  InputTextBox, PrimaryButton } from '../../components'

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
      <div className={classes.logo}>
        <span className={classes.logoText}>NOMINATE PASSWORD</span>
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
      <Padding top={16}>
        <PrimaryButton type="primary" onClick={onClickSubmit} fullWidth>
        SAVE
      </PrimaryButton>
      </Padding>
      </form>
    </Page>
  )
}

export default NominatePassword
