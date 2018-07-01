import { mount } from '@vue/test-utils'
import expect from 'expect'

import Notification from '../../src/components/elements/Notification.vue'

describe('Message', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Notification, {
      slots: {
        default: '<div class="test-div"/>',
      },
    })
  })

  it('outputs a div', () => {
    expect(wrapper.is('div.notification')).toBe(true)
  })

  it('slots content', () => {
    expect(wrapper.contains('div.test-div')).toBe(true)
  })

  it('translates the color prop to a css class', () => {
    wrapper.setProps({ color: 'danger' })

    expect(wrapper.is('div.is-danger')).toBe(true)
  })

  it('has a button when has-button is true', () => {
    expect(wrapper.contains('button.delete')).toBe(false)

    wrapper.setProps({ hasButton: true })

    expect(wrapper.contains('button.delete')).toBe(true)
  })

  it('listens for and emits a close-notification event', () => {
    wrapper.setProps({ hasButton: true })

    const button = wrapper.find('button.delete')

    button.trigger('click')

    expect(wrapper.emitted('close-notification')).toBeTruthy()
  })
})
