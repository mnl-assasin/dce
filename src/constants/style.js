const primary = {
  colorLeft: ' #17ead9',
  colorRight: '#6078ea',
}
const secondary = {
  colorLeft: 'rgb(255, 168, 90)',
  colorRight: 'rgb(243, 129, 129)',
}

const third = {
  colorLeft: ' #ff05c7',
  colorRight: '#8a00ef',
}

const pink = {
  colorLeft: '#f342a8',
  colorRight: '#f10c91',
}

const green = {
  colorRight: '#3dc38c',
  colorLeft: '#0bc1ea',
}

export default {
  primary: { background: grad(primary.colorLeft, primary.colorRight) },
  secondary: { background: grad(secondary.colorLeft, secondary.colorRight) },
  third: { background: grad(third.colorLeft, third.colorRight) },
  pink: { background: grad(pink.colorLeft, pink.colorRight) },
  green: { background: grad(green.colorLeft, green.colorRight) },
}
export const primaryBackground = grad(primary.colorLeft, primary.colorRight)
export const boxShadow = '#e6e3e3 0px 0px 36px 3px'
export const boxShadowWeak = '#ece7e7 0px 0px 36px 3px'

function grad(f, s) {
  return `linear-gradient(to right, ${f} 0%, ${s} 100%)`
}

export const center = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

export const row = {
  display: 'flex',
  flexDirection: 'column',
}

export const column = {
  display: 'flex',
  flexDirection: 'column',
}

const sizes = {
  size1: 12,  // 20,
  size2: 14,  // 24,
  size3: 30,
  size4: 36,
}

export const TextStyles = {
  sizes: {
    ...sizes,
 },
  style1: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: sizes.size1,
  },
  style2: {
    color: '#999999',
    fontWeight: 'bold',
    fontSize: sizes.size1,
  },
  // text input
  style3: {
    color: '#000000',
    placeholderColor: '#999999',
    size: 24
  }
}


