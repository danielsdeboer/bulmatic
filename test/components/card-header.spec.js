import { mount } from '@vue/test-utils'
import expect from 'expect'

import Header from '../../src/components/components/Card/Header.vue'

describe('Container', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Header, {
      propsData: {
        textContent: 'test title',
      },
    })
  })

  it('outputs a div', () => {
    expect(wrapper.is('div.card-header')).toBe(true)
  })

  it('uses the textContent prop as the title text', () => {
    expect(wrapper.find('.card-header-title').text()).toBe('test title')
  })

  it('includes an icon if icon props are used', () => {
    wrapper.setProps({ iconClass: 'fas fa-user' })

    expect(wrapper.contains('.icon')).toBe(true)
  })
})
