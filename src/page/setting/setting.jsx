import React, { useContext, useMemo } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Divider from '@material-ui/core/Divider'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import { Page } from '../../layout'
import { goTo as navigate } from '../../services/navigation'
import { AppContextObject } from '../../services/Providers/AppStateContext'
import * as storage from '../../constants/storage'
import * as route from '../../constants/route'
import useStyles from './styles'

const navigationProps = {
  title: 'Settings',
  backButton: true,
}

const settingItems = appContext => [
  // {
  //   title: 'Login and Security',
  //   getValue: () => variables.sLoginSecurityV,
  //   onClick: () => navigate(BasePage.constants.route.SECURITY)
  // },
  {
    title: 'Network',
    getValue: () =>
      // this will get @example: homestead #blocknumber
      appContext[storage.ACTIVE_PROVIDER_NAME] +
      (appContext[storage.ACTIVE_PROVIDER_BlOCKNUMBER]
        ? ' #' + appContext[storage.ACTIVE_PROVIDER_BlOCKNUMBER]
        : ''),
    onClick: () => navigate(route.NETWORK),
  },
  // {
  //   title: 'Display',
  //   getValue: () => 'Show Quantity',
  //   onClick: () => navigate(route.SETTING_WALLET),
  // },
]

// template
const component = props => {
  const appContext = useContext(AppContextObject)
  const classes = useStyles()
  const settingItemsMem = useMemo(() => settingItems(appContext), [
    appContext[storage.ACTIVE_PROVIDER_BlOCKNUMBER],
  ])
  return (
    <Page navigationProps={navigationProps}>
      <List className={classes.root}>
        {settingItemsMem.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem key={index} button onClick={item.onClick}>
              <ListItemText primary={item.title} secondary={item.getValue()} />
              <ListItemIcon>
                <KeyboardArrowRight />
              </ListItemIcon>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Page>
  )
}

export default component
