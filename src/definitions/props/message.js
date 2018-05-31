import { str, multi } from '../../functions/validators'
import { generic } from '../../definitions/sizes'
import { combine } from '../../definitions/colors'

export const strings = {
  headerText: str(false),
  hasButton: str(false),
  size: str(false, generic),
  color: str(false, combine('bulma', 'message')),
}

export const multiple = {
  bodyText: multi([Array, String], false),
}

export default {
  ...strings,
  ...multiple,
}

