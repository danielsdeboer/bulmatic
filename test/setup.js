// setup JSDOM
require('jsdom-global')()

// make expect available globally
global.expect = require('expect')

window.Date = Date
