import * as storage from '../../../constants/storage'
import { DASHBOARD } from '../../../constants/route'
import { isPassword } from '../../../helper/string'
import { showSnackbar } from '../../../components'
import { goTo as navigate } from '../../../services/navigation'

export default appContext => (password, confirmPassword) => {
  if (!isPassword(password)) {
    return showSnackbar({
      message:
        'Password must be at least 8 characters  and contain 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character.',
      variant: 'warning'
    })
  }

  if (password !== confirmPassword) {
    return showSnackbar({
      message: 'Password did not match',
      variant: 'warning'
    })
  }

  appContext.persist({
    [storage.IS_LOGGED]: true,
    [storage.IS_SET_PASSWORD]: true,
    // will be encrypted later
    [storage.PASSWORD]: password
  })

  navigate(DASHBOARD)
}
