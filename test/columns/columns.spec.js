import { mount } from '@vue/test-utils'
import expect from 'expect'
import props from '::def/props/columns'
import boolPropsTest from '../functions/bool-props-test'

import Columns from '../../src/components/columns/Columns.vue'

describe('Columns', () => {
  let component

  const fresh = () => mount(Columns, {
    slots: {
      default: '<div class="test-div"></div>',
    },
  })

  const bools = Object.keys(props.bools)

  beforeEach(() => {
    component = fresh()
  })

  it('outputs a div with a columns class', () => {
    expect(component.is('div.columns')).toBe(true)
  })

  it('slots content', () => {
    expect(component.findAll('div.test-div').length).toBe(1)
  })

  boolPropsTest(bools, 'div.columns', fresh)
})
