import { mount } from '@vue/test-utils'
import expect from 'expect'

import Title from '../../src/components/components/Modal/Card/Title'

describe('Container', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Title)
  })

  it('outputs a paragraph', () => {
    expect(wrapper.is('p.modal-card-title')).toBe(true)
  })

  it('slots content if text-content is not used', () => {
    wrapper = mount(Title, {
      context: { props: { textContent: 'expected text' } },
    })

    console.log(wrapper.html())

    expect(wrapper.text()).toBe('expected text')
  })

  // it('uses prefers textContent over the default slot', () => {
  //   wrapper = mount(Title, {
  //     propsData: { textContent: 'is expected' },
  //     slots: { default: 'is not expected' },
  //   })

  //   const title = wrapper.find('modal-card-title')

  //   console.log(wrapper.html())

  //   expect(title.text()).toBe('is expected')
  // })
})
