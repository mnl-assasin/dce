import { makeStyles } from '@material-ui/styles'
import { center } from '../../constants/style'

export const styles = theme => ({
  logo: {
    ...center,
    flex: 2,
  },
    title:{
        fontSize: 22,
        fontWeight: 'bold',
        paddingTop: 22,
        paddingBottom: 32,
        textAlign: 'center'
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
