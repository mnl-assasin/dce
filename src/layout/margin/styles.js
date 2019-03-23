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
}) => {
  const marginStyle = {}
  if (isDefined(all)) {
    marginStyle.marginLeft = all
    marginStyle.marginTop = all
    marginStyle.marginRight = all
    marginStyle.marginBottom = all
  }

  // targeted
  if (isDefined(left)) {
    marginStyle.marginLeft = left
  }
  if (isDefined(top)) {
    marginStyle.marginTop = top
  }
  if (isDefined(right)) {
    marginStyle.marginRight = right
  }
  if (isDefined(bottom)) {
    marginStyle.marginBottom = bottom
  }

  // direction
  if (isDefined(horizontal)) {
    marginStyle.marginLeft = horizontal
    marginStyle.marginRight = horizontal
  }
  if (isDefined(vertical)) {
    marginStyle.marginTop = vertical
    marginStyle.marginBottom = vertical
  }

  return marginStyle
}
