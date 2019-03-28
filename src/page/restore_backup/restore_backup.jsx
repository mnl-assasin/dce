import React, { useCallback, useContext } from 'react'
import TextField from '@material-ui/core/TextField'

import { Page } from '../../layout'
import { restoreBackup } from '../../hof'
import { useTextbox } from '../../hook'
import { Col } from '../../common'
import { goTo as navigate } from '../../services/navigation'
import { alertDialog, PrimaryButton, Text } from '../../components'
import { inputTypes } from '../../constants/types'
import { AppContextObject } from '../../services/Providers/AppStateContext'
import useStyles from './styles'

// page setup
// const title = 'RestoreBackup'
const navigationProps = {
  backButton: true,
}

// methods

// template
const RestoreBackup = props => {
  const appContext = useContext(AppContextObject)
  const classes = useStyles()
  const phraseState = useTextbox()
  const onClickSubmit = useCallback(
    () => restoreBackup(appContext, navigate, alertDialog)(phraseState.value),
    [phraseState.value]
  )
  return (
    <Page navigationProps={navigationProps}>
      <div className={classes.logo}>
        <Text variant="h5">Welcome back and logo</Text>
      </div>
      <Col flex="1">
        <TextField
          label="Enter backup phrase"
          margin="normal"
          variant="outlined"
          className={classes.textField}
          type={inputTypes.text}
          {...phraseState}
        />
        <div className={classes.buttonHolder}>
          <PrimaryButton
            type="primary"
            size="medium"
            fullWidth
            onClick={onClickSubmit}
          >
            Submit
          </PrimaryButton>
        </div>
      </Col>
    </Page>
  )
}

export default RestoreBackup
