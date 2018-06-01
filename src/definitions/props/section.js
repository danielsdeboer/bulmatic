import { str, bool } from '../../functions/validators'
import { generic } from '../../definitions/sizes'

export const bools = {
  isInFlow: bool(false),
}

export const strings = {
  size: str(false, generic),
}

export default Object.assign({}, strings, bools)
