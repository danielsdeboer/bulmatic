import { mount } from '@vue/test-utils'
import expect from 'expect'

import Modal from '../../src/components/components/Modal.vue'

describe('Modal', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Modal, { slots: { default: '<p class="test-content"/>' } })
  })

  it('outputs a div', () => {
    expect(wrapper.is('div.modal')).toBe(true)
  })

  it('has a modal background', () => {
    expect(wrapper.contains('div.modal-background')).toBe(true)
  })

  it('has a close button', () => {
    expect(wrapper.contains('button.modal-close')).toBe(true)
  })

  it('slots content into the modal-content div by default', () => {
    const content = wrapper.find('div.modal-content')

    expect(content.contains('p.test-content')).toBe(true)
  })

  it('emits modal-close when lightbox clicked', () => {
    const lightbox = wrapper.find('div.modal-background')

    lightbox.trigger('click')

    expect(wrapper.emitted('modal-close')).toBeTruthy()
  })
})
