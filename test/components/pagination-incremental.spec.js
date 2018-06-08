import { mount } from '@vue/test-utils'
import expect from 'expect'

import Incremental from '../../src/components/components/Pagination/Incremental.vue'

describe('Pagination Incremental', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Incremental, {
      propsData: {
        direction: 'previous',
      },
    })
  })

  it('outputs an anchor with a directional class', () => {
    expect(wrapper.is('a.pagination-previous')).toBe(true)
  })

  it('uses the direction prop as default text', () => {
    expect(wrapper.text()).toBe('Previous')

    wrapper.setProps({ direction: 'next' })

    expect(wrapper.text()).toBe('Next')
  })

  it('accepts custom text', () => {
    const textContent = 'lorem ipsum'

    wrapper.setProps({ textContent })

    expect(wrapper.text()).toBe(textContent)
  })

  it('can be disabled', () => {
    wrapper.setProps({ isDisabled: true })

    expect(wrapper.attributes().disabled).toBe('disabled')
  })

  it('emits a page change event when clicked', () => {
    wrapper.trigger('click')

    expect(wrapper.emitted('previous-page')).toBeTruthy()

    wrapper.setProps({ direction: 'next' })
    wrapper.trigger('click')

    expect(wrapper.emitted('next-page')).toBeTruthy()
  })

  it('emits no event when disabled', () => {
    wrapper.setProps({ isDisabled: true })
    wrapper.trigger('click')

    expect(wrapper.emitted('previous-page')).toBe(undefined)
    expect(wrapper.emitted('next-page')).toBe(undefined)
  })
})
