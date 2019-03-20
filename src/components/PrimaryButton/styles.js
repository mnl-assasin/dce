import { makeStyles } from '@material-ui/styles'

const style = {
  borderRadius: 3,
  border: 0,
  borderRadius: 99,
  border: 0,
}

export const outlined = {
  ...style,
  background: 'white',
  color: 'black',
  border: '1px solid #DDDDDD',
}

export const primary = {
  ...style,
  background: 'linear-gradient(to right, #ffa85a 0%,#f38181 100%)',
  color: 'white',
}

export const secondary = {
  ...style,
  background: 'linear-gradient(to right, #17ead9 0%,#6078ea 100%)',
  color: 'white',
}

export default theme => ({
  root: {
  },
  label: {
    textTransform: 'uppercase',
  },
})
