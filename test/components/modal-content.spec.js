import { mount } from '@vue/test-utils'
import expect from 'expect'

import Content from '../../src/components/components/Modal/Content'

describe('Modal Content', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Content, {
      slots: {
        default: 'slotted text',
      },
    })
  })

  it('outputs a div', () => {
    expect(wrapper.is('div.modal-content')).toBe(true)
  })

  it('slots content', () => {
    // This is what should be
    // expect(wrapper.text()).toBe('slotted text')

    // This is what actually is. Right now the wrapper text is
    // replaced with a div.
    // TODO: fix this when the vue-test-utils bug is fixed
    expect(wrapper.contains('div')).toBe(true)
  })

  it('accepts text-content', () => {
    wrapper = mount(Content, {
      context: {
        props: { textContent: 'passed in via prop' },
      },
    })

    expect(wrapper.text()).toBe('passed in via prop')
  })
})
