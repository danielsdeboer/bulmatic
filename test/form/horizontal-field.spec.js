import { mount } from '@vue/test-utils'
import expect from 'expect'

import HorizontalField from '../../src/components/form/HorizontalField.vue'

describe('Horizontal Field', () => {
  let wrapper

  const fresh = () => mount(HorizontalField, {
    slots: {
      label: 'this is a label',
      body: '<input class="an-input"/>',
    },
  })

  beforeEach(() => {
    wrapper = fresh()
  })

  it('outputs a div', () => {
    expect(wrapper.is('div.field.is-horizontal')).toBe(true)
  })

  it('has a label', () => {
    const label = wrapper.find('div.field-label')

    expect(label.contains('label.label')).toBe(true)
  })

  it('has a body', () => {
    const body = wrapper.find('div.field-body')

    expect(body.contains('input.an-input')).toBe(true)
  })
})
