import { mount } from '@vue/test-utils'
import expect from 'expect'

import Icon from '../../src/components/elements/Icon.vue'

describe('Icon', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Icon, {
      propsData: {
        icon: 'fas fa-user some-other-test',
      },
    })
  })

  it('outputs a span', () => {
    expect(wrapper.is('span.icon')).toBe(true)
  })

  it('maps the icon prop to the <i>', () => {
    expect(wrapper.contains('i.fas.fa-user.some-other-test')).toBe(true)
  })

  it('has a size prop + class', () => {
    wrapper.setProps({ size: 'large' })

    expect(wrapper.contains('span.icon.is-large')).toBe(true)
  })

  it('has a color prop + class', () => {
    wrapper.setProps({ color: 'danger' })

    expect(wrapper.contains('span.icon.has-text-danger')).toBe(true)
  })

  it('slots content if no icon is passed in', () => {
    const cssClass = 'icon-slot-content'
    const slots = {
      default: `<div class="${cssClass}"/>`,
    }
    const propsData = {
      icon: 'icon-class icon-class-modifier',
    }

    const withoutIcon = mount(Icon, {
      slots,
    })

    const withIcon = mount(Icon, {
      slots,
      propsData,
    })

    expect(withoutIcon.contains(`div.${cssClass}`)).toBe(true)
    expect(withIcon.contains(`div.${cssClass}`)).toBe(false)
  })
})
