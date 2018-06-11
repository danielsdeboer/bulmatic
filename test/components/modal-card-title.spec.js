import { mount } from '@vue/test-utils'
import expect from 'expect'

import Title from '../../src/components/components/Modal/Card/Title.vue'

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

    expect(wrapper.text()).toBe('slotted text')
  })

  it('accepts text-content', () => {
    wrapper.setProps({ textContent: 'prop content' })

    expect(wrapper.text()).toBe('prop content')
  })

  it('prefers text-content', () => {
    wrapper = mount(Title, {
      slots: {
        default: 'slotted content',
      },
      propsData: {
        textContent: 'prop content',
      },
    })

    expect(wrapper.text()).toBe('prop content')
  })
})
