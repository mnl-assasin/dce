import React, { useCallback, useContext } from 'react'

import { Wallet } from 'dapper'
import { Page, Padding } from '../../layout'
import { PrimaryButton, Text, Icon } from '../../components'
import { AppContextObject } from '../../services/Providers/AppStateContext'
import * as route from '../../constants/route'
import * as storage from '../../constants/storage'
import { goTo } from '../../services/navigation'
import { Dapper } from '../../asset'
import useStyles from './styles'

// page setup
// const title = 'Getting Started'
const navigationProps = {
  // title: title,
  backButton: true,
}

// methods
// const onClickGetStarted = () => goTo(route.MNEMONIC_PHRASE)
// const onClickRestoreBackup = () => goTo(route.RESTORE_BACKUP)

// template
const onLogOutClick = () => {
  console.log('onLogOutClick')
}

const onLogOutClearDataClick = () => {
  console.log('onLogOutClearDataClick')
}

const LogOut = () => {
  const appContext = useContext(AppContextObject)
  const classes = useStyles()

  return (
    <Page navigationProps={navigationProps}>
      <div className={classes.logo}>
        <Padding top={30} bottom={150}>
          <Icon src={Dapper} size={120} />
        </Padding>
      </div>
      <div className={classes.buttonGroup}>
        <Padding vertical={5}>
          <PrimaryButton
            type="primary"
            size="medium"
            fullWidth
            onClick={onLogOutClick}
          >
            Log out
          </PrimaryButton>
        </Padding>
        <Padding vertical={5}>
          <PrimaryButton
            type="secondary"
            size="medium"
            fullWidth
            onClick={onLogOutClearDataClick}
          >
            Log out and delete all local data
          </PrimaryButton>
        </Padding>
      </div>
    </Page>
  )
}

export default LogOut
