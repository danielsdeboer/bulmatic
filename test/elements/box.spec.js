import { mount } from '@vue/test-utils'
import expect from 'expect'

import Box from '../../src/components/elements/Box.vue'

describe('Icon', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Box, { slots: { default: '<p class="testing"/>' } })
  })

  it('outputs a div', () => {
    expect(wrapper.is('div.box')).toBe(true)
  })

  it('slots content', () => {
    expect(wrapper.contains('p.testing'))
  })
})
