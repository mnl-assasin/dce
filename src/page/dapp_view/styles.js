import { makeStyles } from '@material-ui/styles'
import { center, boxShadowWeak } from '../../constants/style'

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
  row: {
    flexDirection: 'row',
  },
  col: {
    flexDirection: 'column',
    display: 'flex',
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
  container: { border: '1px solid #dadada', fontSize: 13, paddingLeft: 8, marginTop: 8 },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 12,
  },

  blocWrapper: {
    paddingTop: 16,
  },
  resultTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    paddingBottom: 8,
    paddingTop: 8,
    // textAlign: 'start',
  },

  itemContainer: {
    boxShadow: boxShadowWeak,
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 8,
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 8
  },

  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 8,
  },
  itemSubtitle: {
    fontSize: 10,
    color: '#999',
    fontWeight: 'bold',
  },
  itemTime: {
    verticalAlign: 'middle',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    flexDirection: 'column',
    fontSize: 10,
    color: '#999',
    fontWeight: 'bold',
  },
})

export default makeStyles(styles)
