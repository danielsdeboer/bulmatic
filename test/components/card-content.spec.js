import { mount } from '@vue/test-utils'
import expect from 'expect'

import Content from '../../src/components/components/Card/Content.vue'

describe('Container', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Content, {
      slots: {
        default: '<div class="test-div"/>',
      },
    })
  })

  it('outputs a div', () => {
    expect(wrapper.is('div.card-content')).toBe(true)
  })

  it('slots content', () => {
    expect(wrapper.contains('div.test-div')).toBe(true)
  })
})
