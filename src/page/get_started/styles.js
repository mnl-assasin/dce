import { makeStyles } from '@material-ui/styles'
import { column, center } from '../../constants/style'

export const styles = theme => ({
  root: {},
  logo: {
    ...center,
    flex: 2,
    height: 200,
  },
  buttonGroup: {
    ...column,
    flex: 1,
    padding: theme.spacing.unit * 3,
    justifyContent: 'center',
  },
})

export default makeStyles(styles)
