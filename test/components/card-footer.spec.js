import { mount } from '@vue/test-utils'
import expect from 'expect'

import Footer from '../../src/components/components/Card/Footer'

describe('Card Footer', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Footer, {
      slots: {
        default: '<div class="test-div"/>',
      },
    })
  })

  it('outputs a div', () => {
    expect(wrapper.is('div.card-footer')).toBe(true)
  })

  it('slots content', () => {
    expect(wrapper.contains('div.test-div')).toBe(true)
  })
})
