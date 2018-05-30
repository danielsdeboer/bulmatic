import expect from 'expect'
import colors from '::def/colors'

describe('definitions/colors', () => {
  it('provides a default colors export', () => {
    expect(Object.keys(colors).length).toBeGreaterThan(1)
  })

  it('combines properties', () => {
    const expected = colors.base.concat(colors.bulma)

    expect(colors.combine('base', 'bulma')).toEqual(expected)
  })

  it('does not fail on non-existent props', () => {
    const expected = colors.base.concat(colors.bulma)

    expect(colors.combine('base', 'bulma', 'other', 'thing')).toEqual(expected)
  })
})
