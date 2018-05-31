import { bool } from '../../functions/validators'

export const bools = {
  isFluid: bool(false),
  isWidescreen: bool(false),
  isFullhd: bool(false),
}

export default {
  ...bools,
}
