import { mount } from '@vue/test-utils'
import expect from 'expect'

import Label from '../../src/components/form/Label.vue'

describe('Label', () => {
  let wrapper

  const fresh = () => mount(Label, {
    slots: {
      default: 'a simple label',
    },
  })

  beforeEach(() => {
    wrapper = fresh()
  })

  it('outputs a label', () => {
    expect(wrapper.is('label.label')).toBe(true)
  })

  it('slots content', () => {
    expect(wrapper.text()).toBe('a simple label')
  })
})
