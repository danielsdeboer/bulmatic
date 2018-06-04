import { str } from '../../functions/validators'
import { generic } from '../../definitions/sizes'
import colors from '../../definitions/colors'

export const size = {
  size: str(false, generic),
}

export const color = {
  color: str(false, colors.combine('base', 'shades', 'bulma')),
}

export default Object.assign({}, size, color)
