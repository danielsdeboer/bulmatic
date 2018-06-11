import { mount } from '@vue/test-utils'
import expect from 'expect'

import Button from '../../src/components/components/Modal/CloseButton.vue'

describe('Modal Close Button', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Button)
  })

  it('outputs a button', () => {
    expect(wrapper.is('button.modal-close')).toBe(true)
  })
})