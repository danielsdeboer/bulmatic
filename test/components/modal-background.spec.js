import { mount } from '@vue/test-utils'
import expect from 'expect'

import Background from '../../src/components/components/Modal/Background'

describe('Container', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Background)
  })

  it('outputs a div', () => {
    expect(wrapper.is('div.modal-background')).toBe(true)
  })
})
