import { mount } from '@vue/test-utils'
import expect from 'expect'

import Item from '../../src/components/components/Card/Footer/Item.vue'

describe('Container', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Item, {
      slots: {
        default: 'Click To Emit',
      },
    })
  })

  it('outputs an anchor', () => {
    expect(wrapper.is('a.card-footer-item')).toBe(true)
  })

  it('slots content', () => {
    expect(wrapper.text()).toBe('Click To Emit')
  })

  it('emits a footer-item-click event on click', () => {
    wrapper.trigger('click')

    expect(wrapper.emitted('footer-item-click')).toBeTruthy()
  })
})
