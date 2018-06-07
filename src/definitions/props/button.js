import { str, bool } from '../../functions/validators'
import { generic } from '../../definitions/sizes'
import colors from '../../definitions/colors'

export const bools = {
  isOutlined: bool(false),
  isInverted: bool(false),
  isRounded: bool(false),
  isHovered: bool(false),
  isFocused: bool(false),
  isActive: bool(false),
  isLoading: bool(false),
  isStatic: bool(false),
}

export const strings = {
  size: str(false, generic),
  color: str(false, colors.combine('bulma', 'base', 'button')),
}

export default {
  ...strings,
  ...bools,
}

