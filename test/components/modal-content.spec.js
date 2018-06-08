import { mount } from '@vue/test-utils'
import expect from 'expect'

import Content from '../../src/components/components/Modal/Content'

describe('Container', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Content, {
      slots: {
        default: '<p/>',
        testing: 'some text',
      },
    })
  })

  it('outputs a div', () => {
    expect(wrapper.is('div.modal-content')).toBe(true)
  })

  it('slots content', () => {
    console.log(wrapper.html())
    expect(wrapper.text()).toBe('some texts')
  })
})
