import React, { useCallback, useContext } from 'react'

import { Wallet } from 'dapper'
import { Page, Padding } from '../../layout'
import { PrimaryButton, Text, Icon } from '../../components'
import { AppContextObject } from '../../services/Providers/AppStateContext'
import * as route from '../../constants/route'
import * as storage from '../../constants/storage'
import { goTo } from '../../services/navigation'
import Storage from '../../services/storage/storage'
import { Dapper } from '../../asset'
import useStyles from './styles'

// page setup
// const title = 'Getting Started'
const navigationProps = {
  // title: title,
  backButton: true,
}

// template

const LogOut = () => {
  const appContext = useContext(AppContextObject)
  const classes = useStyles()

  const onLogOutClick = useCallback(() => {
    console.log('onLogOutClick')
    appContext.persist({
      [storage.IS_LOGGED]: false,
    })
    goTo(route.LOGIN)
  }, [])

  const onLogOutClearDataClick = useCallback(() => {
    // console.log('onLogOutClearDataClick')
    Storage.clear()
    appContext.clear()
    appContext.persist({
      [storage.IS_LOGGED]: false,
      // [WALLET_ADDRESS]: '0x0598aC83C088f126B3043059FCfd2E7A5F0886FF',
    })
    goTo(route.GET_STARTED)
  }, [])

  return (
    <Page navigationProps={navigationProps}>
      <div className={classes.logo} />
      <div className={classes.buttonGroup}>
        <Padding vertical={8}>
          <PrimaryButton
            type="primary"
            size="medium"
            fullWidth
            onClick={onLogOutClick}
          >
            Log out
          </PrimaryButton>
        </Padding>
        <Padding vertical={8}>
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
