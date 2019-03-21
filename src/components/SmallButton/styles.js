import { makeStyles } from '@material-ui/styles'

export default theme => ({
  root: {
    borderRadius: 2,
    paddingBottom: '0.4rem',
    paddingTop: '0.4rem',
    backgroundColor: '#EEEEEE',
    textTransform: 'none',
  },
  countHolder: {
    width: '100%',
    position: 'absolute',
    paddingLeft: theme.spacing.unit,
    display: 'flex',
  },
  labelHolder: {
    paddingLeft: theme.spacing.unit * 3,
  },
  count: {
    padding: '1px 8px',
    backgroundColor: '#DDDDDD',
  },
  label: {
    textTransform: 'none',
  },
})
