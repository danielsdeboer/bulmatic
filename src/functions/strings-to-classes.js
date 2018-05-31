import isJoin from './is-join'

/**
 * @param {Object} context
 * @param {Object|Array} strings
 */
export default function (context, strings, joiner = isJoin) {
  const items = Array.isArray(strings) ? strings : Object.keys(strings)

  return items.map(item => (
    context[item]
      ? joiner(item)
      : ''
  ))
}
