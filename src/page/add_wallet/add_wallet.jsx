import React, { useCallback, useState, useContext } from 'react'
import { AppContextObject } from '../../services/Providers/AppStateContext'
import Radio from '@material-ui/core/Radio'
import { PrimaryButton } from '../../components'
import { Padding, Page } from '../../layout'
import { displayTypes } from '../../constants/types'
import { propertyCount } from '../../helper/function'
import * as route from '../../constants/route'
import * as storage from '../../constants/storage'
import createHDWallet from '../../hof/create_hd_wallet'
import { navigate } from '../../services/navigation'
import useStyles from './styles'
const navigationProps = {
  title: '',
  backButton: true,
}

const component = props => {
  const appContext = useContext(AppContextObject)
  const classes = useStyles()
  const [value, valueSet] = useState('')
  const onSubmit = useCallback(() => console.log('submitted'), [])
  const onCreateEthWallet = useCallback(
    () => {
      createHDWallet(appContext)(
        // wallet mnemonic
        appContext[storage.USER_MNEMONIC],
        // path
        propertyCount(appContext[storage.USER_WALLETS]),
        // types
        value || displayTypes.default,
        navigate(route.DASHBOARD)
      )
    },
    [value]
  )

  return (
    <Page navigationProps={navigationProps}>
      <Padding vertical={60} />
      <div className={classes.container}>
        <div className={classes.content} onClick={() => valueSet('quantity')}>
          <span>Show Quantity</span>
          <span>
            <Radio
              checked={value === 'quantity'}
              style={{ color: '#46a585' }}
            />
          </span>
        </div>
        <hr
          style={{
            border: '.5px solid #dadada',
            margin: 0,
            marginLeft: 12,
          }}
        />
        <div className={classes.content} onClick={() => valueSet('value')}>
          <span>Show Value</span>
          <span>
            <Radio checked={value === 'value'} style={{ color: '#46a585' }} />
          </span>
        </div>
      </div>
      <Padding vertical={110} />

      <Padding vertical={4}>
        <PrimaryButton type="secondary" onClick={onCreateEthWallet} fullWidth>
          save
        </PrimaryButton>
      </Padding>
    </Page>
  )
}

export default component
