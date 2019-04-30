import { makeStyles } from '@material-ui/styles'
import { column, center } from '../../constants/style'

export const styles = theme => ({
  root: {},
  logo: {
    ...center,
    flex: 2,
    height: 180,
  },
  buttonGroup: {
    ...column,
    flex: 1,
    justifyContent: 'center',
  },
})

export default makeStyles(styles)
