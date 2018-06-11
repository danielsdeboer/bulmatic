import { mount } from '@vue/test-utils'
import expect from 'expect'

import Footer from '../../src/components/components/Modal/Card/Footer'

describe('Modal Card Footer', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Footer)
  })

  it('outputs a div', () => {
    expect(wrapper.is('div.modal-card-footer')).toBe(true)
  })

  it('has save and cancel buttons by default', () => {
    expect(
      wrapper.contains('button.button.is-success')
      && wrapper.contains('button.button.is-modal-cancel')
    ).toBe(true)
  })

  it('emits a save-changes event on button click', () => {
    const save = wrapper.find('button.is-success')

    save.trigger('click')

    expect(wrapper.emitted('save-changes')).toBeTruthy()
  })

  it('replaces the buttons with any slotted content', () => {
    wrapper = mount(Footer, {
      slots: {
        default: '<button class="testing-button"/>',
      },
    })

    expect(
      wrapper.contains('button.button.is-success')
      && wrapper.contains('button.button.is-modal-cancel')
    ).toBe(false)

    expect(wrapper.contains('button.testing-button')).toBe(true)
  })
})
