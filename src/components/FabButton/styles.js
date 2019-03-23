import { primaryBackground } from '../../constants/style'

const baseSize = 14

export const getStyle = (size, style) => {
  const boxStyle = {}
  let fontSize = baseSize
  if (size === 'small') {
    boxStyle.width = baseSize * 2
    boxStyle.height = baseSize * 2
    fontSize = baseSize * 1
  }
  if (size === 'medium') {
    boxStyle.width = baseSize * 3.5
    boxStyle.height = baseSize * 3.5
    fontSize = baseSize * 2
  }
  if (size === 'large') {
    boxStyle.width = baseSize * 4
    boxStyle.height = baseSize * 4
    fontSize = baseSize * 3
  }
  return { box: { ...boxStyle, ...style }, font: { fontSize } }
}

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
    width: '100%',
    display: 'inherit',
    alignItems: 'inherit',
    justifyContent: 'inherit',
    color: 'inherit',
  },
})
