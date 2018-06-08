import { mount } from '@vue/test-utils'
import expect from 'expect'

import Card from '../../src/components/components/Modal/Card'

describe('Container', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Card, { slots: { default: '<p class="testing"/>' } })
  })

  it('outputs a div', () => {
    expect(wrapper.is('div.modal-card')).toBe(true)
  })

  it('slots content', () => {
    expect(wrapper.contains('p.testing')).toBe(true)
  })
})
