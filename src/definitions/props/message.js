import { str, multi, bool } from '../../functions/validators'
import { generic } from '../../definitions/sizes'
import colors from '../../definitions/colors'

export const bools = {
  isBordered: bool(false),
}

export const strings = {
  size: str(false, generic),
  color: str(false, colors.combine('bulma', 'message')),
}

export const multiple = {
  bodyText: multi([Array, String], false),
}

export default {
  ...strings,
  ...multiple,
  ...bools,
}

