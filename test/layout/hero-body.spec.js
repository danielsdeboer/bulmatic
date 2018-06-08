import { mount } from '@vue/test-utils'
import expect from 'expect'

import Body from '../../src/components/layout/Hero/Body.vue'

describe('Hero Body', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Body, { slots: { default: '<p class="testing"/>' } })
  })

  it('outputs div', () => {
    expect(wrapper.is('div.hero-body')).toBe(true)
  })

  it('slots content in the default slot', () => {
    expect(wrapper.contains('p.testing')).toBe(true)
  })
})
