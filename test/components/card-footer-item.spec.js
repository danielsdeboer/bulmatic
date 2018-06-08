import { mount } from '@vue/test-utils'
import expect from 'expect'

import Item from '../../src/components/components/Card/Footer/Item.vue'

describe('Card Footer Item', () => {
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

  it('attaches the item name as a payload if set', () => {
    wrapper.trigger('click')

    expect(wrapper.emitted('footer-item-click')[0]).toEqual([{ itemName: '' }])

    wrapper.setProps({ itemName: 'testing' })
    wrapper.trigger('click')

    expect(wrapper.emitted('footer-item-click')[1]).toEqual([{ itemName: 'testing' }])
  })
})
