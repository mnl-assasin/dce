import { boxShadow } from '../../constants/style'

export const container = {
  borderRadius: 20,
  backgroundColor: 'white',
  boxShadow: boxShadow,
  flexDirection: 'row',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}

export const titleStyle = {
  textTransform: 'uppercase',
  fontSize: 15,
  fontWeight: 'bolder',
}
export const subTitleStyle = {
  textTransform: 'uppercase',
  fontSize: 12,
  color: 'gray',
  fontWeight: 'bolder',
}

export const wraperStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
}

export const headerContainer = { flexDirection: 'row', display: 'flex' }

export default theme => ({
  root: {},
})
