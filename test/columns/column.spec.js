import { mount } from '@vue/test-utils'
import expect from 'expect'
import { bools } from '::def/props/column'
import boolPropsTest from '../functions/bool-props-test'

import Column from '../../src/components/columns/Column.vue'

describe('Column', () => {
  let wrapper

  const fresh = () => mount(Column, {
    slots: {
      default: '<div class="test-div"></div>',
    },
  })

  const boolNames = Object.keys(bools)
  const baseClass = 'div.column'

  beforeEach(() => {
    wrapper = fresh()
  })

  it('outputs a div with a column class', () => {
    expect(wrapper.is(baseClass)).toEqual(true)
  })

  it('slots content', () => {
    expect(wrapper.findAll('div.test-div').length).toBe(1)
  })

  boolPropsTest(boolNames, baseClass, fresh)

  it('has size classes', () => {
    wrapper.setProps({ size: 'one-quarter' })

    console.log(wrapper.vm.size)

    expect(wrapper.is(`${baseClass}.is-one-quarter`)).toBe(true)
  })

  it('has offset classes', () => {
    wrapper.setProps({ offset: 'one-quarter' })

    expect(wrapper.is(`${baseClass}.is-offset-one-quarter`)).toBe(true)
  })
})
