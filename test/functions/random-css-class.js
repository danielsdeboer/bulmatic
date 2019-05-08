import randomString from 'randomstring'

export default (length = 12, charset = 'alphabetic') => randomString.generate({ length, charset })
