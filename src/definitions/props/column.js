import { bool, str } from '../../functions/validators'
import { column } from '../../definitions/sizes'

export const bools = {
  isNarrow: bool(false),
  isNarrowMobile: bool(false),
  isNarrowTablet: bool(false),
  isNarrowDesktop: bool(false),
}

export const strings = {
  size: str(false, column),
  offset: str(false, column),
}

export default {
  ...bools,
  ...strings,
}
