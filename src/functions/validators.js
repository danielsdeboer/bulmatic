/**
 * Read the tea leaves and figure out if we have a require or default property name.
 * @param {*} value
 */
const propName = value => (
  typeof value === 'boolean'
    ? 'required'
    : 'default'
)

/**
 * Compose a validator for multiple types.
 * @param {array} types
 * @param {bool|*} reqOrDef
 * @param {array|null} validation
 * @returns {Object}
 */
export const multi = (types, reqOrDef, validation = null) => Object.assign({
  type: types,
  [propName(reqOrDef)]: reqOrDef,
  ...!!validation && { validator: value => validation.includes(value) },
})

/**
 * Compose a validator for a string, optionally taking an array of strings to validate against.
 * @param {*} reqOrDef
 * @param {string[]} validation
 */
export const str = (reqOrDef, validation = null) => ({
  type: String,
  [propName(reqOrDef)]: reqOrDef,
  ...!!validation && { validator: value => validation.includes(value) },
})

/**
 * Compose a validator for a boolean.
 * @param {*} def
 */
export const bool = (def = false) => ({
  type: Boolean,
  default: def,
})

/**
 * Create an array prop validator.
 * @param {boolean|array} reqOrDef
 * @returns {Object}
 */
export const arr = reqOrDef => ({
  type: Array,
  [propName(reqOrDef)]: reqOrDef,
})

export const obj = reqOrDef => ({
  type: Object,
  [propName(reqOrDef)]: reqOrDef,
})

/**
 * Create a validator for a class.
 * @param {Object} type
 * @param {boolean} required
 * @returns {Object}
 */
export const objOf = (type, required) => ({
  type,
  required,
})
