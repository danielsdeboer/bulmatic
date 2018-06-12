import expect from 'expect'
import { bool } from '../src/functions/validators'

describe('validators.bool', () => {
  it('has a boolean type', () => {
    const val = bool()

    expect(val.type).toBe(Boolean)
  })

  it('is not required by default', () => {
    const val = bool()

    expect(val.default).toBe(false)
  })

  it('is required if the first arg is true', () => {
    const val = bool(true)

    expect(val.default).toBe(true)
  })

  it('does not set a required key', () => {
    const val = bool(true)

    expect(val.required).toBe(undefined)
  })
})
