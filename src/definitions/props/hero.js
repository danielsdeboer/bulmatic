import { str, bool } from '../../functions/validators'
import { generic, medium, large } from '../../definitions/sizes'
import colors from '../../definitions/colors'

export const nonClassBools = {
  hasContainer: bool(true),
}

export const bools = {
  isBold: bool(true),
}

export const strings = {
  size: str(false, generic.concat([medium, large])),
  color: str(false, colors.combine('base', 'bulma')),
}

export default Object.assign({}, strings, bools, nonClassBools)
