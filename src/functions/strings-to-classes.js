import isJoin from './is-join'

/**
 * @param {Object} context
 * @param {Object|Array} strings
 */
export default (context, strings, joiner = isJoin) => (
  Object.keys(strings).map(item => (context[item]
    ? joiner(context[item])
    : ''
  ))
)
