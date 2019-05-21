import { makeStyles } from '@material-ui/styles'
import { center } from '../../constants/style'

export const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  logo: {
    ...center,
    flex: 2,
  },
  headerContainer: {
    paddingTop: 22,
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    paddingTop: 4,
    fontWeight: 'bold',
    paddingBottom: 32,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#999',
    textAlign: 'center',
  },
  container: { border: '1px solid #dadada', fontSize: 13 },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 12,
  },
})

export default makeStyles(styles)
