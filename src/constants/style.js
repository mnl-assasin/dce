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

function grad(f, s) {
  return `linear-gradient(to right, ${f} 0%, ${s} 100%)`
}
export default {
  primary: { background: grad(primary.colorLeft, primary.colorRight) },
  secondary: { background: grad(secondary.colorLeft, secondary.colorRight) },
  third: { background: grad(third.colorLeft, third.colorRight) },
  pink: { background: grad(pink.colorLeft, pink.colorRight) },
}
export const primaryBackground = grad(primary.colorLeft, primary.colorRight)
export const boxShadow = '#efeaea 0px 0px 7px 1px'
