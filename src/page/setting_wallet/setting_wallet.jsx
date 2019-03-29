import React, { useCallback } from 'react'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import Radio from '@material-ui/core/Radio'
import { useTextbox, useToggle } from '../../hook'
import { PrimaryButton, Text } from '../../components'
import { navigate } from '../../services/navigation'
import { inputTypes } from '../../constants/types'
import { Padding, Page } from '../../layout'
import * as route from '../../constants/route'
import useStyles from './styles'

const navigationProps = {
  title: '',
  backButton: true,
}

const Login = props => {
  const classes = useStyles()
  const onSubmit = useCallback(() => console.log('submitted'), [])

  return (
    <Page navigationProps={navigationProps}>
      <Padding vertical={60} />
      <div className={classes.container}>
        <div className={classes.content}>
          <span>Show Quantity</span>
          <span>
            <Radio style={{ color: '#46a585' }} />
          </span>
        </div>
        <hr
          style={{
            border: '.5px solid #dadada',
            margin: 0,
            marginLeft: 12,
          }}
        />
        <div className={classes.content}>
          <span>Show Value</span>
          <span>
            <Radio style={{ color: '#46a585' }} />
          </span>
        </div>
      </div>
      <Padding vertical={110} />

      <Padding vertical={4}>
        <PrimaryButton type="secondary" onClick={onSubmit} fullWidth>
          save
        </PrimaryButton>
      </Padding>
    </Page>
  )
}

export default Login
