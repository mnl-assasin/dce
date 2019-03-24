import React, { useCallback, useContext } from 'react'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

import { Page } from '../../layout'
import { useTextbox, useToggle } from '../../hook'
import { inputTypes } from '../../constants/types'
import { AppContextObject } from '../../services/Providers/AppStateContext'
import submit from './method/submit'
import useStyles from './styles'

// page setup
const title = 'Nominate Password'
const navigationProps = {
  backButton: true,
}

// methods

// template
const NominatePassword = props => {
  const appContext = useContext(AppContextObject)
  const classes = useStyles()
  const passwordState = useTextbox('')
  const passwordConfirmState = useTextbox('')
  const passwordVisivility = useToggle(false)
  const passwordConfirmVisivility = useToggle(false)
  const onClickSubmit = useCallback(
    () => submit(appContext)(passwordState.value, passwordConfirmState.value),
    [passwordState.value, passwordConfirmState.value]
  )
  return (
    <Page navigationProps={navigationProps}>
      <div className={classes.logo}>
        <Typography variant="h5">{title}</Typography>
      </div>
      <form className={classes.container} noValidate autoComplete="off">
        <div className={classes.description}>
          <Typography variant="caption" gutterBottom>
            Password must be at least 8 characters At least 1 uppercase letter,
            At least 1 lowecase letter, At least 1 number, At least 1 special
            character,
          </Typography>
        </div>
        <TextField
          label="Enter Password"
          variant="outlined"
          className={classes.textField}
          value={passwordState.value}
          onChange={passwordState.onChange}
          type={
            passwordVisivility.value ? inputTypes.text : inputTypes.password
          }
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={passwordVisivility.onChange}
                >
                  {passwordVisivility.value ? (
                    <VisibilityOff />
                  ) : (
                    <Visibility />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <TextField
          label="Enter Confirm Password"
          margin="normal"
          variant="outlined"
          className={classes.textField}
          value={passwordConfirmState.value}
          onChange={passwordConfirmState.onChange}
          type={
            passwordConfirmVisivility.value
              ? inputTypes.text
              : inputTypes.password
          }
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={passwordConfirmVisivility.onChange}
                >
                  {passwordConfirmVisivility.value ? (
                    <VisibilityOff />
                  ) : (
                    <Visibility />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <div className={classes.buttonHolder}>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            onClick={onClickSubmit}
          >
            Submit
          </Button>
        </div>
      </form>
    </Page>
  )
}

export default NominatePassword
