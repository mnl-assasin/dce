import React, { useCallback, useContext } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

import Page from '../../layout/Page'
import restoreBackup from '../../hof/restore_backup'
import { useTextbox } from '../../hook'
import { Col } from '../../common'
import { goTo as navigate } from '../../services/navigation'
import { alertDialog } from '../../components'
import { inputTypes } from '../../constants/types'
import { AppContextObject } from '../../services/Providers/AppStateContext'
import useStyles from './styles'

// page setup
// const title = 'RestoreBackup'
const navigationProps = {
  backButton: true
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
        <Typography variant="h5">Welcome back and logo</Typography>
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
          <Button
            variant="outlined"
            color="primary"
            size="large"
            onClick={onClickSubmit}
          >
            Submit
          </Button>
        </div>
      </Col>
    </Page>
  )
}

export default RestoreBackup
