import expect from 'expect'
import hasTextJoin from '../src/functions/has-text-join'

describe('has-text-join', () => {
  it('prepends a string with has-text-', () => {
    expect(hasTextJoin('some-string')).toBe('has-text-some-string')
  })
})
