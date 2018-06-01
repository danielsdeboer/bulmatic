import { mount } from '@vue/test-utils'
import expect from 'expect'

import MessageHeader from '../../src/components/components/Message/Header.vue'

describe('Container', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(MessageHeader, {
      props: {
        textContent: 'test header',
        hasButton: true,
      },
    })
  })

  it('outputs a div', () => {
    expect(wrapper.is('div.message-header')).toBe(true)
  })

  it('has a button when has-button is true', () => {
    expect(wrapper.contains('button.delete')).toBe(false)

    wrapper.setProps({ hasButton: true })

    expect(wrapper.contains('button.delete')).toBe(true)
  })

  it('emits a close-message event on button click', () => {
    wrapper.setProps({ hasButton: true })
    const button = wrapper.find('button.delete')

    button.trigger('click')

    expect(wrapper.emitted('close-message')).toBeTruthy()
  })
})
