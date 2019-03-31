import { makeStyles } from '@material-ui/styles'
import { center } from '../../constants/style'

export const styles = theme => ({
  logo: {
    ...center,
    flex: 2,
  },
  container: { border: '1px solid #dadada' },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 12,
  },
})

export default makeStyles(styles)
