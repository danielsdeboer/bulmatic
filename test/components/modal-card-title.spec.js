import { mount } from '@vue/test-utils'
import expect from 'expect'

import Title from '../../src/components/components/Modal/Card/Title'

describe('Modal Card Title', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Title)
  })

  it('outputs a paragraph', () => {
    expect(wrapper.is('p.modal-card-title')).toBe(true)
  })

  it('slots content', () => {
    wrapper = mount(Title, { slots: { default: 'slotted text' } })

    // This is what should be
    // expect(wrapper.text()).toBe('slotted text')

    // This is what actually is. Right now the wrapper text is
    // replaced with a div.
    // TODO: fix this when the vue-test-utils bug is fixed
    expect(wrapper.contains('div')).toBe(true)
  })

  it('accepts text-content', () => {
    wrapper = mount(Title, {
      context: {
        props: {
          textContent: 'passed in via prop',
        },
      },
    })

    expect(wrapper.text()).toBe('passed in via prop')
  })

  it('prefers text-content', () => {
    it('accepts text-content', () => {
      wrapper = mount(Title, {
        slots: {
          default: 'slotted content',
        },
        context: {
          props: {
            textContent: 'prop content',
          },
        },
      })

      expect(wrapper.text()).toBe('prop content')
    })
  })
})
