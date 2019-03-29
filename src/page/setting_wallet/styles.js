import { makeStyles } from '@material-ui/styles'

export const styles = theme => ({
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
