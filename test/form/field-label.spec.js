import { mount } from '@vue/test-utils'
import expect from 'expect'

import Label from '../../src/components/form/Field/Label.vue'

describe('Field Label', () => {
  let wrapper

  const fresh = () => mount(Label, {
    slots: {
      default: 'a simple label',
    },
  })

  beforeEach(() => {
    wrapper = fresh()
  })

  it('outputs a div with is-normal class by default', () => {
    expect(wrapper.is('div.field-label.is-normal')).toBe(true)
  })

  it('slots content inside a label', () => {
    const label = wrapper.find('label.label')

    expect(label.text()).toBe('a simple label')
  })

  it('has a size prop', () => {
    wrapper.setProps({ size: 'large' })

    expect(wrapper.is('.is-large')).toBe(true)
    expect(wrapper.is('.is-normal')).toBe(false)
  })
})
