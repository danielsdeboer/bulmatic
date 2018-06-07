import { mount } from '@vue/test-utils'
import expect from 'expect'

import Button from '../../src/components/elements/Button.vue'

describe('Button', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Button)
  })

  it('outputs a button by default', () => {
    expect(wrapper.is('button.button')).toBe(true)
  })

  it('has a button, a, or input tag depending on the tag prop', () => {
    const tags = ['button', 'a', 'input']

    tags.forEach((tag) => {
      const r = mount(Button, { context: { props: { tag } } })

      expect(r.is(`${tag}.button`)).toBe(true)
    })
  })

  // it('slots content', () => {
  //   wrapper = mount(Button, { slots: { default: 'some text' } })

  //   expect(wrapper.text()).toBe('some text')
  // })
})
