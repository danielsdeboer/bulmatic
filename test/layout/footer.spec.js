import { mount } from '@vue/test-utils'
import expect from 'expect'
import rcc from '../functions/random-css-class'

import Footer from '../../src/components/layout/Footer.vue'

describe('Container', () => {
  const cssClass = rcc()
  let component

  const fresh = () => mount(Footer, {
    slots: {
      default: `<div class="${cssClass}"></div>`,
    },
  })

  beforeEach(() => {
    component = fresh()
  })

  it('outputs a footer', () => {
    expect(component.is('footer.footer')).toBe(true)
  })

  it('slots content', () => {
    expect(component.findAll(`div.${cssClass}`).length).toBe(1)
  })
})
