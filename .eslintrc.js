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
   'import/resolver': {
      webpack: {
        config: path.resolve('./webpack.config.js'),
      },
    }
  },
}
