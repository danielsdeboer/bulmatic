import { mount } from '@vue/test-utils'
import expect from 'expect'

import Header from '../../src/components/components/Card/Header.vue'
import Icon from '../../src/components/elements/Icon.vue'

describe('Card Header', () => {
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
    expect(wrapper.contains('.icon')).toBe(false)

    wrapper.setProps({ icon: 'fas fa-user' })

    expect(wrapper.contains('.icon')).toBe(true)
  })

  it('emits a icon-click event when the icon is clicked', () => {
    wrapper.setProps({ icon: 'fas fa-user' })

    const icon = wrapper.find('a.card-header-icon')

    icon.trigger('click')

    expect(wrapper.emitted('icon-click')).toBeTruthy()
  })
})
