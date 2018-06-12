import { mount } from '@vue/test-utils'
import expect from 'expect'

import { bools } from '../../src/definitions/props/control'
import boolPropsTest from '../functions/bool-props-test'
import Control from '../../src/components/form/Control.vue'

describe('Control', () => {
  const boolProps = Object.keys(bools)

  const base = 'div.control'
  const left = [base, 'has-icons-left'].join('.')
  const right = [base, 'has-icons-right'].join('.')
  let wrapper

  const defaultSlot = { default: '<input class="testing"/>' }
  const leftSlot = { left: '<span class="icon-left"/>' }
  const rightSlot = { right: '<span class="icon-right"/>' }

  const fresh = (...slots) => mount(Control, {
    slots: Object.assign({}, ...slots),
  })

  beforeEach(() => {
    wrapper = fresh(defaultSlot)
  })

  it('outputs a div', () => {
    expect(wrapper.is(base)).toBe(true)
  })

  it('slots content', () => {
    expect(wrapper.contains('input.testing'))
  })

  it('has a left slot', () => {
    wrapper = fresh(leftSlot)

    expect(wrapper.contains('span.icon-left')).toBe(true)
  })

  it('has has-icons-left class when the left slot is used', () => {
    wrapper = fresh(leftSlot)

    expect(wrapper.is(left)).toBe(true)
  })

  boolPropsTest(boolProps, base, fresh)

  it('has a right slot', () => {
    wrapper = fresh(rightSlot)

    expect(wrapper.contains('span.icon-right')).toBe(true)
  })

  it('has has-icons-right class when the right slot is used', () => {
    wrapper = fresh(rightSlot)

    expect(wrapper.is(right)).toBe(true)
  })

  it('renders a simple icon when left-icon is set', () => {
    wrapper.setProps({ leftIcon: 'fas fa-user' })

    expect(wrapper.contains('span.icon.is-left')).toBe(true)
  })

  it('renders a simple icon when right-icon is set', () => {
    wrapper.setProps({ rightIcon: 'fas fa-user' })

    expect(wrapper.contains('span.icon.is-right')).toBe(true)
  })
})
