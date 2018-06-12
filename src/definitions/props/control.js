import { bool, str } from '../../functions/validators'

export const bools = {
  isExpanded: bool(false),
}

export const strings = {
  leftIcon: str(false),
  rightIcon: str(false),
}

export default Object.assign({}, bools, strings)
