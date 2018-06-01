import { str } from '../../functions/validators'
import { generic } from '../../definitions/sizes'

export const strings = {
  size: str(false, generic),
}

export default Object.assign({}, strings)
