import { makeStyles } from '@material-ui/styles'
import { primaryBackground } from '../../constants/style'

export default theme => ({
  root: {
    boxSizing: 'border-box',
    borderRadius: '50%',
    cursor: 'pointer',
    background: primaryBackground,
    verticalAlign: 'middle',
    justifyContent: 'center',
    position: 'relative',
    alignItems: 'center',
    display: 'inline-flex',
    color: 'white',
  },
  label: {
    textTransform: 'uppercase',
  },
  label: {
    width: '100%',
    display: 'inherit',
    alignItems: 'inherit',
    justifyContent: 'inherit',
    color: 'inherit',
  },
})
