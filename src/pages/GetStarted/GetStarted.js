import React from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import Page from '../../layout/Page'
import * as route from '../../constants/route'
import { goTo } from '../../services/navigation'
import useStyles from './styles'

// page setup
const title = 'Getting Started'
const navigationProps = {
  title: title
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
        <Typography variant="h3"></Typography>
      </div>
      <div className={classes.buttonGroup}>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          onClick={onClickGetStarted}
        >
          Get Started
        </Button>
        <br />
        <Button
          variant="outlined"
          color="primary"
          size="large"
          onClick={onClickRestoreBackup}
        >
          Restore Backup
        </Button>
      </div>
    </Page>
  )
}

export default GetStarted
