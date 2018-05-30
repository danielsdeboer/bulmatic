import kebabCase from 'lodash.kebabcase'

/**
 * @param {Object} context
 * @param {Object|Array} booleans
 */
export default function (context, booleans) {
  // For convenience where boolean props are stored in an object.
  const items = Array.isArray(booleans) ? booleans : Object.keys(booleans)

  return items.map(item => (context[item] ? kebabCase(item) : ''))
}
