import { bool, str } from '../../functions/validators'

export const bools = {
  hasAddons: bool(false),
  hasAddonsCentered: bool(false),
  hasAddonsRight: bool(false),
  isGrouped: bool(false),
  isGroupedCentered: bool(false),
  isGroupedRight: bool(false),
  isGroupedMultiline: bool(false),
}

export const strings = {
  labelText: str(false),
}

export default Object.assign({}, bools, strings)
