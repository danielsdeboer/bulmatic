import { mount } from '@vue/test-utils'
import expect from 'expect'
// import { bools } from '::def/props/level'
// import boolPropsTest from '../functions/bool-props-test'

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

  it('has a header when header-text is set', () => {
    expect(wrapper.contains('div.message-header')).toBe(false)

    wrapper.setProps({ headerText: 'test header' })

    expect(wrapper.find('div.message-header').contains('test header'))
  })

  it('has a button when has-button is true', () => {
    expect(wrapper.contains('button.delete')).toBe(false)

    wrapper.setProps({ hasButton: true, headerText: 'test' })

    expect(wrapper.contains('button.delete')).toBe(true)
  })
})
