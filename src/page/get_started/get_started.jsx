import React from 'react'

import { Page, Padding } from '../../layout'
import { PrimaryButton, Text, Icon } from '../../components'
import * as route from '../../constants/route'
import { goTo } from '../../services/navigation'
import { Dapper } from '../../asset'
import useStyles from './styles'

// page setup
// const title = 'Getting Started'
const navigationProps = {
  // title: title,
}

// methods
const onClickGetStarted = () => goTo(route.MNEMONIC_PHRASE)
const onClickRestoreBackup = () => goTo(route.RESTORE_BACKUP)

// template
const GetStarted = () => {
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
            onClick={onClickGetStarted}
          >
            Get Started
          </PrimaryButton>
        </Padding>
        <Padding vertical={5}>
          <PrimaryButton
            type="secondary"
            size="medium"
            fullWidth
            onClick={onClickRestoreBackup}
          >
            Restore Backup
          </PrimaryButton>
        </Padding>
      </div>
    </Page>
  )
}

export default GetStarted
