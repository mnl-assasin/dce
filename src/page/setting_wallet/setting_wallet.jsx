import React, { useCallback } from 'react'
import Radio from '@material-ui/core/Radio'
import { PrimaryButton } from '../../components'
import { Padding, Page } from '../../layout'
import useStyles from './styles'

const navigationProps = {
  title: '',
  backButton: true,
}

const component = props => {
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

export default component
