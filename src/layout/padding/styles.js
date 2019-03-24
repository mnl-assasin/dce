import { isDefined } from '../../helper/function'

export const getStyle = ({
  size,
  all,
  left,
  top,
  right,
  bottom,
  horizontal,
  vertical,
  button,
}) => {
  const paddingStyle = {}
  if (isDefined(all)) {
    paddingStyle.paddingLeft = all
    paddingStyle.paddingTop = all
    paddingStyle.paddingRight = all
    paddingStyle.paddingBottom = all
  }

  // targeted
  if (isDefined(left)) {
    paddingStyle.paddingLeft = left
  }
  if (isDefined(top)) {
    paddingStyle.paddingTop = top
  }
  if (isDefined(right)) {
    paddingStyle.paddingRight = right
  }
  if (isDefined(bottom)) {
    paddingStyle.paddingBottom = bottom
  }

  // direction
  if (isDefined(horizontal)) {
    paddingStyle.paddingLeft = horizontal
    paddingStyle.paddingRight = horizontal
  }
  if (isDefined(vertical)) {
    paddingStyle.paddingTop = vertical
    paddingStyle.paddingBottom = vertical
  }
  if (button) {
    paddingStyle.cursor = 'pointer'
  }

  return paddingStyle
}

export default theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
})
