import { mount } from '@vue/test-utils'
import expect from 'expect'

import Card from '../../src/components/components/Card.vue'

describe('Card', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Card, {
      slots: {
        default: '<p class="test-content">here is test content</p>',
      },
    })
  })

  it('outputs a div', () => {
    expect(wrapper.is('div.card')).toBe(true)
  })

  it('has a header if headerText is set', () => {
    expect(wrapper.contains('.card-header')).toBe(false)

    wrapper.setProps({ headerText: 'this is a header' })

    expect(wrapper.contains('.card-header')).toBe(true)
  })

  it('slots content', () => {
    expect(wrapper.find('.card-content').text()).toBe('here is test content')
  })

  it('has a footer if the footer slot is used', () => {
    expect(wrapper.contains('.card-footer')).toBe(false)

    wrapper = mount(Card, { slots: { footer: 'now there is a footer' } })

    expect(wrapper.contains('.card-footer')).toBe(true)
  })

  it('re-emits icon-click as header-icon-click with the card name', () => {
    wrapper = mount(Card, {
      propsData: {
        headerText: 'some header',
        headerIcon: 'fas fa-user',
        cardName: 'somename',
      },
    })

    const icon = wrapper.find('.icon')
    icon.trigger('click')

    expect(wrapper.emitted('header-icon-click')[0]).toEqual([{ cardName: 'somename' }])
  })

  it('has an optional card name', () => {
    expect(wrapper.vm.computedCardName).toBe('')

    wrapper.setProps({ cardName: 'some name' })

    expect(wrapper.vm.computedCardName).toBe('some name')
  })
})
