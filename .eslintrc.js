const path = require('path')

module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'html',
    'prettier',
    'import',
  ],
  extends: [
    'dbt',
  ],
  settings: {
   'import/resolver': 'webpack'
  },
  rules: {
    'import/no-named-as-default-member': 'off',
    'no-unused-expressions': ['error', { allowShortCircuit: true }]
  },
  root: true,
}
