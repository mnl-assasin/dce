import React, { useState, useCallback, useContext } from 'react'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import RadioButtonChecked from '@material-ui/icons/RadioButtonChecked'
import { AppContextObject } from '../../services/Providers/AppStateContext'
import { goTo as navigate } from '../../services/navigation'
import { setBlockNumber } from '../../hof'
import { Page } from '../../layout'
import { Text } from '../../components'
import { setIsActive, getIsActive } from './method'
import { settingItems } from './data'
import useStyles from './styles'

const title = 'Network'
const navigationProps = {
  title,
  backButton: true,
}

const component = props => {
  const appContext = useContext(AppContextObject)
  const classes = useStyles()
  const [error, setError] = useState('')
  const onGetIsActive = useCallback(getIsActive(appContext), [])
  const onSetActive = useCallback(
    setIsActive(appContext, navigate, setBlockNumber(appContext), setError),
    []
  )
  return (
    <Page navigationProps={navigationProps}>
      <div className={classes.logo}>
        <Text variant="h5">ETH</Text>
      </div>
      <List className={classes.root}>
        {settingItems.map((item, index) => {
          const isActive = onGetIsActive(item)
          return (
            <React.Fragment key={item._id}>
              <ListItem
                button
                onClick={() => onSetActive(item)}
                selected={isActive}
              >
                <ListItemText primary={item.title} secondary={item.info} />
                {isActive ? (
                  <ListItemIcon>
                    <RadioButtonChecked />
                  </ListItemIcon>
                ) : null}
              </ListItem>
              <Divider />
            </React.Fragment>
          )
        })}
      </List>
    </Page>
  )
}

export default component
