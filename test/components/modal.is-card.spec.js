import { mount } from '@vue/test-utils'
import expect from 'expect'

import Modal from '../../src/components/components/Modal.vue'

describe('Modal', () => {
  const propsData = {
    isCard: true,
    titleText: 'test title',
  }

  const defaultSlot = {
    default: '<p class="test-para"/>',
  }

  const footSlot = {
    foot: '<button class="its-a-button"/>',
  }

  let wrapper
  let footWrapper

  beforeEach(() => {
    wrapper = mount(Modal, {
      propsData,
      slots: Object.assign({}, defaultSlot),
    })

    footWrapper = mount(Modal, {
      propsData,
      slots: Object.assign({}, defaultSlot, footSlot),
    })
  })

  it('has a modal-card div', () => {
    expect(wrapper.contains('div.modal-card')).toBe(true)
  })

  it('has a modal-card-head div', () => {
    expect(wrapper.contains('div.modal-card-head')).toBe(true)
  })

  it('has a modal-card-foot div', () => {
    expect(wrapper.contains('div.modal-card-foot')).toBe(true)
  })

  it('slots content into the modal-card-body', () => {
    const body = wrapper.find('div.modal-card-body')

    expect(body.contains('p.test-para')).toBe(true)
  })

  it('has buttons if the foot slot is not used', () => {
    const foot = wrapper.find('div.modal-card-foot')

    expect(foot.contains('button.is-success') && foot.contains('button.is-modal-cancel')).toBe(true)
  })

  it('has no buttons if the foot slot is used', () => {
    const foot = footWrapper.find('div.modal-card-foot')

    expect(foot.contains('button.its-a-button')).toBe(true)
  })

  it('emits modal-cancel when cancel is clicked', () => {
    const button = wrapper.find('button.is-modal-cancel')

    button.trigger('click')

    expect(wrapper.emitted('modal-cancel')).toBeTruthy()
  })

  it('emits modal-save-changes when save button clicked', () => {
    const button = wrapper.find('button.is-success')

    button.trigger('click')

    expect(wrapper.emitted('modal-save-changes')).toBeTruthy()
  })
})
