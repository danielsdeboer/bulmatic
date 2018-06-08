import { mount } from '@vue/test-utils'
import expect from 'expect'

import Head from '../../src/components/layout/Hero/Head.vue'

describe('Hero Head', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Head, { slots: { default: '<p class="testing"/>' } })
  })

  it('outputs div', () => {
    expect(wrapper.is('div.hero-head')).toBe(true)
  })

  it('slots content in the default slot', () => {
    expect(wrapper.contains('p.testing')).toBe(true)
  })
})
