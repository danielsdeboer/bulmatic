import { mount } from '@vue/test-utils'
import expect from 'expect'
import { bools } from '::def/props/level'
import pick from 'lodash.pick'
import has from '../functions/wrapper-has'
import boolPropsTest from '../functions/bool-props-test'
import rcc from '../functions/random-css-class'

import Level from '../../src/components/layout/Level.vue'

describe('Level', () => {
  const boolProps = Object.keys(bools)
  const defaultClass = rcc()
  const leftClass = rcc()
  const rightClass = rcc()

  const slots = {
    default: `<div class="${defaultClass}"/>`,
    left: `<div class="${leftClass}"/>`,
    right: `<div class="${rightClass}"/>`,
  }

  const wrapper = (...picked) => mount(Level, {
    slots: pick(slots, picked),
  })


  it('outputs a level div', () => {
    expect(wrapper().is('div.level')).toBe(true)
  })

  it('slots content in the default slot', () => {
    const level = wrapper('default')

    expect(has(level, `div.${defaultClass}`)).toBe(true)
    expect(has(level, `div.${leftClass}`)).toBe(false)
    expect(has(level, `div.${rightClass}`)).toBe(false)
  })

  it('has a LevelLeft component only if the left slot is used', () => {
    const level = wrapper('left')

    expect(has(level, `div.${leftClass}`)).toBe(true)
    expect(has(level, 'div.level-left')).toBe(true)

    expect(has(level, `div.${rightClass}`)).toBe(false)
    expect(has(level, 'div.level-right')).toBe(false)
  })

  it('has a LevelRight component only if the right slot is used', () => {
    const level = wrapper('right')

    expect(has(level, `div.${leftClass}`)).toBe(false)
    expect(has(level, 'div.level-left')).toBe(false)

    expect(has(level, `div.${rightClass}`)).toBe(true)
    expect(has(level, 'div.level-right')).toBe(true)
  })

  it('can have all three', () => {
    const level = wrapper('default', 'right', 'left')

    expect(has(level, `div.${defaultClass}`)).toBe(true)

    expect(has(level, `div.${leftClass}`)).toBe(true)
    expect(has(level, 'div.level-left')).toBe(true)

    expect(has(level, `div.${rightClass}`)).toBe(true)
    expect(has(level, 'div.level-right')).toBe(true)
  })

  boolPropsTest(boolProps, 'div.level', wrapper)
})
