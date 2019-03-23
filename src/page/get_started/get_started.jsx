import React from 'react'

import Page from '../../layout/Page'
import { PrimaryButton, Text } from '../../components'
import * as route from '../../constants/route'
import { goTo } from '../../services/navigation'
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
        <Text variant="h3" />
      </div>
      <div className={classes.buttonGroup}>
        <PrimaryButton
          type="primary"
          size="medium"
          fullWidth
          onClick={onClickGetStarted}
        >
          Get Started
        </PrimaryButton>
        <br />
        <PrimaryButton
          type="secondary"
          size="medium"
          onClick={onClickRestoreBackup}
        >
          Restore Backup
        </PrimaryButton>
      </div>
    </Page>
  )
}

export default GetStarted
