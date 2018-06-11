import { mount } from '@vue/test-utils'
import expect from 'expect'

import Card from '../../src/components/components/Modal/Card.vue'

describe('ModalCard', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Card, {
      slots: {
        default: '<p class="testing"/>',
      },
      propsData: {
        titleText: 'title text',
      },
    })
  })

  it('outputs a div', () => {
    expect(wrapper.is('div.modal-card')).toBe(true)
  })

  it('slots content', () => {
    expect(wrapper.contains('p.testing')).toBe(true)
  })

  it('has a header', () => {
    const header = wrapper.find('div.modal-card-head')

    expect(header.contains('p.modal-card-title')).toBe(true)
  })

  it('has a header with a title', () => {
    const title = wrapper.find('p.modal-card-title')

    expect(title.text()).toBe('title text')
  })

  it('has a header with a close button', () => {
    const header = wrapper.find('div.modal-card-head')

    expect(header.contains('button.delete')).toBe(true)
  })
})
