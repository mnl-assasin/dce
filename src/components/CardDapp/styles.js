import { boxShadowWeak } from '../../constants/style'
import styles from '../../constants/style'

export const container = isActive => ({
  borderRadius: 20,
  background: isActive ? styles.green.background : 'white',
  boxShadow: boxShadowWeak,
  flexDirection: 'column',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: 93,
})

export const titleStyle = isActive => ({
  fontSize: 15,
  fontWeight: 'bolder',
  color: isActive ? 'white' : 'black',
})

export const wraperStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
}

export const headerContainer = { flexDirection: 'row', display: 'flex' }

export default theme => ({
})
