/**
 * Combine objects by name.
 * @param {string[]} groups
 */
export const combine = function combine (...groups) {
  return [].concat(...groups.map(
    prop => this[prop] || [])
  )
}

export const base = [
  'white',
  'light',
  'dark',
  'black',
]

export const shades = [
  'white',
  'black',
  'light',
  'dark',
  'black-bis',
  'black-ter',
  'grey-darker',
  'grey-dark',
  'grey',
  'grey-light',
  'grey-lighter',
  'white-ter',
  'white-bis',
]

export const bulma = [
  'primary',
  'link',
  'info',
  'success',
  'warning',
  'danger',
]

export const button = [
  'text',
]

export const message = [
  'dark',
]

export default {
  base,
  shades,
  bulma,
  button,
  combine,
}
