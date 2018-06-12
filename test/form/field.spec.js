import { mount } from '@vue/test-utils'
import expect from 'expect'

import { bools } from '../../src/definitions/props/field'
import boolPropsTest from '../functions/bool-props-test'
import Field from '../../src/components/form/Field.vue'

describe('Field', () => {
  let wrapper

  const fresh = () => mount(Field, {
    slots: {
      default: '<p class="para"/>',
    },
  })

  beforeEach(() => {
    wrapper = fresh()
  })

  it('outputs a div', () => {
    expect(wrapper.is('div.field')).toBe(true)
  })

  it('slots content', () => {
    expect(wrapper.contains('p.para'))
  })

  boolPropsTest(Object.keys(bools), 'div.field', fresh)
})
