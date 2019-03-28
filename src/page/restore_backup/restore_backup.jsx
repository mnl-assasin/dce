import React, { useCallback, useContext } from 'react'
import TextField from '@material-ui/core/TextField'

import { Page, Padding } from '../../layout'
import { restoreBackup } from '../../hof'
import { useTextbox } from '../../hook'
import { Col } from '../../common'
import { goTo as navigate } from '../../services/navigation'
import {
  alertDialog,
  PrimaryButton,
  Text,
  InputTextBox,
  Icon,
} from '../../components'
import { inputTypes } from '../../constants/types'
import { AppContextObject } from '../../services/Providers/AppStateContext'
import { Dapper } from '../../asset'
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
        <Padding top={30} bottom={150}>
          <Icon src={Dapper} size={120} />
        </Padding>
      </div>
      <Col flex="1">
        <InputTextBox
          placeholder="Enter backup phrase"
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
            RESTORE
          </PrimaryButton>
        </div>
      </Col>
    </Page>
  )
}

export default RestoreBackup
