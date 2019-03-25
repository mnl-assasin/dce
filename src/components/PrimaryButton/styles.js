import color from '../../constants/style'

const style = {
  borderRadius: 99,
  paddingBottom: '0.8rem',
  paddingTop: '0.8rem',
}

export const outlined = {
  ...style,
  background: 'white',
  color: 'black',
  border: '1px solid #DDDDDD',
}

export const primary = {
  ...style,
  ...color.primary,
  color: 'white',
}

export const secondary = {
  ...style,
  ...color.secondary,
  color: 'white',
}

export default theme => ({
  root: {},
  label: {
    textTransform: 'uppercase',
  },
})
