import { mount } from '@vue/test-utils'
import expect from 'expect'

import Head from '../../src/components/components/Modal/Card/Head.vue'

describe('Modal Card Head', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Head)
  })

  it('outputs a div', () => {
    expect(wrapper.is('div.modal-card-head')).toBe(true)
  })

  it('slots content if text-content is not used', () => {
    wrapper = mount(Head, { slots: { default: '<p class="testing"/>' } })

    expect(wrapper.contains('p.testing')).toBe(true)
  })

  it('prefers textContent over the default slot', () => {
    wrapper = mount(Head, {
      propsData: { textContent: 'is expected' },
      slots: { default: 'is not expected' },
    })

    const title = wrapper.find('.modal-card-title')

    expect(title.text()).toBe('is expected')
  })
})
