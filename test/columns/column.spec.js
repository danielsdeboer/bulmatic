import { mount } from '@vue/test-utils'
import expect from 'expect'
import { bools } from '::def/props/column'
import boolPropsTest from '../functions/bool-props-test'

import Column from '../../src/components/columns/Column.vue'

describe('Columns', () => {
  let component

  const fresh = () => mount(Column, {
    slots: {
      default: '<div class="test-div"></div>',
    },
  })

  const boolNames = Object.keys(bools)
  const baseClass = 'div.column'

  beforeEach(() => {
    component = fresh()
  })

  it('outputs a div with a column class', () => {
    expect(component.is(baseClass)).toBe(true)
  })

  it('slots content', () => {
    expect(component.findAll('div.test-div').length).toBe(1)
  })

  boolPropsTest(boolNames, baseClass, fresh)

  it('has size classes', () => {
    component.setProps({ size: 'one-quarter' })

    expect(component.is(`${baseClass}.is-one-quarter`)).toBe(true)
  })

  it('has offset classes', () => {
    component.setProps({ offset: 'one-quarter' })

    expect(component.is(`${baseClass}.is-offset-one-quarter`)).toBe(true)
  })
})
