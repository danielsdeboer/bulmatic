import { mount } from '@vue/test-utils'
import expect from 'expect'

import Message from '../../src/components/components/Message.vue'
import MessageBody from '../../src/components/components/Message/Body.vue'

describe('Container', () => {
  let wrapper
  const slot = { default: '<div class="test-div"/>' }

  const component = (slots = {}) => mount(Message, {
    slots,
  })

  beforeEach(() => {
    wrapper = component()
  })

  it('outputs a div', () => {
    expect(wrapper.is('div.message')).toBe(true)
  })

  it('slots content in the message body', () => {
    expect(
      component(slot).find(MessageBody).contains('div.test-div')
    ).toBe(true)
  })

  it('passes body-text to the MessageBody', () => {
    wrapper.setProps({ bodyText: 'test string' })

    expect(
      wrapper.find(MessageBody).text()
    ).toBe('test string')
  })

  it('translates the color prop to a css class', () => {
    wrapper.setProps({ color: 'danger' })

    expect(wrapper.is('div.is-danger')).toBe(true)
  })

  it('translates the size prop to a css class', () => {
    wrapper.setProps({ size: 'large' })

    expect(wrapper.is('div.is-large')).toBe(true)
  })

  it('has a header when header-text is set', () => {
    expect(wrapper.contains('div.message-header')).toBe(false)

    wrapper.setProps({ headerText: 'test header' })

    expect(wrapper.contains('div.message-header')).toBe(true)
    expect(wrapper.find('div.message-header').text()).toBe('test header')
  })

  it('has a button when has-button is true', () => {
    expect(wrapper.contains('button.delete')).toBe(false)

    wrapper.setProps({ hasButton: true, headerText: 'test' })

    expect(wrapper.contains('button.delete')).toBe(true)
  })

  it('listens for and emits a close-message event', () => {
    wrapper.setProps({ hasButton: true, headerText: 'test' })

    const button = wrapper.find('button.delete')

    button.trigger('click')

    expect(wrapper.emitted('close-message')).toBeTruthy()
  })

  it('has a border when is-bordered is true', () => {
    wrapper.setProps({ isBordered: true })

    expect(wrapper.is('.message.is-bordered'))
  })
})
