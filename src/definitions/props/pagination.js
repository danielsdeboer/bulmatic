import { str, bool } from '../../functions/validators'
import { pagination } from '../../definitions/alignments'
import { generic } from '../../definitions/sizes'

export const bools = {
  isRounded: bool(false),
}

export const strings = {
  alignment: str(false, pagination),
  size: str(false, generic),
}

export default Object.assign({}, bools, strings)

