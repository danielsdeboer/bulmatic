import { str, bool } from '../../functions/validators'
import colors from '../../definitions/colors'

export const bools = {
  hasButton: bool(false),
}

export const strings = {
  color: str(false, colors.bulma),
}

export default {
  ...strings,
  ...bools,
}

