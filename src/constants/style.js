const primary = {
  colorLeft: 'rgb(255, 168, 90)',
  colorRight: 'rgb(243, 129, 129)',
}
const secondary = {
  colorLeft: ' #17ead9',
  colorRight: '#6078ea',
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
