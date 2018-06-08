import { mount } from '@vue/test-utils'
import expect from 'expect'

import Foot from '../../src/components/layout/Hero/Foot.vue'

describe('Hero Foot', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Foot, { slots: { default: '<p class="testing"/>' } })
  })

  it('outputs div', () => {
    expect(wrapper.is('div.hero-foot')).toBe(true)
  })

  it('slots content in the default slot', () => {
    expect(wrapper.contains('p.testing')).toBe(true)
  })
})
