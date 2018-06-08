import { mount } from '@vue/test-utils'
import expect from 'expect'
import { bools } from '::def/props/level'
import pick from 'lodash.pick'
import has from '../functions/wrapper-has'
import boolPropsTest from '../functions/bool-props-test'

import Level from '../../src/components/layout/Level.vue'

describe('Level', () => {
  const slots = {
    default: '<div class="default-slot"/>',
    left: '<div class="left-slot"/>',
    right: '<div class="right-slot"/>',
  }

  const boolProps = Object.keys(bools)

  const wrapper = (...picked) => mount(Level, {
    slots: pick(slots, picked),
  })

  it('outputs a container div', () => {
    expect(wrapper().is('div.level')).toBe(true)
  })

  it('slots content in the default slot', () => {
    const level = wrapper('default')

    expect(has(level, 'div.default-slot')).toBe(true)
    expect(has(level, 'div.left-slot')).toBe(false)
    expect(has(level, 'div.right-slot')).toBe(false)
  })

  it('has a LevelLeft component only if the left slot is used', () => {
    const level = wrapper('left')

    expect(has(level, 'div.left-slot')).toBe(true)
    expect(has(level, 'div.level-left')).toBe(true)

    expect(has(level, 'div.right-slot')).toBe(false)
    expect(has(level, 'div.level-right')).toBe(false)
  })

  it('has a LevelRight component only if the right slot is used', () => {
    const level = wrapper('right')

    expect(has(level, 'div.left-slot')).toBe(false)
    expect(has(level, 'div.level-left')).toBe(false)

    expect(has(level, 'div.right-slot')).toBe(true)
    expect(has(level, 'div.level-right')).toBe(true)
  })

  boolPropsTest(boolProps, 'div.level', wrapper)
})
