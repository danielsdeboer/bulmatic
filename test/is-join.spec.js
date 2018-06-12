import expect from 'expect'
import isJoin from '../src/functions/is-join'

describe('is-join', () => {
  it('prepends a string with is-', () => {
    expect(isJoin('some-string')).toBe('is-some-string')
  })
})
