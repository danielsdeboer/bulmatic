import { bool } from '../../functions/validators'

export const bools = {
  isGapless: bool(false),
  isMultiline: bool(false),
  isMobile: bool(false),
  isDesktop: bool(false),
}

export default {
  ...bools,
}
