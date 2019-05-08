import { mount } from '@vue/test-utils'
import expect from 'expect'
import rcc from '../functions/random-css-class'

import Menu from '../../src/components/components/Menu.vue'

describe('Menu', () => {
  const cssClass = rcc()
  let wrapper

  beforeEach(() => {
    wrapper = mount(Menu, {
      slots: {
        default: `<p class="${cssClass}">here is test content</p>`,
      },
    })
  })

  it('outputs an aside', () => {
    expect(wrapper.is('aside.menu')).toBe(true)
  })

  it('slots content', () => {
    expect(wrapper.contains(`p.${cssClass}`)).toBe(true)
  })
})
