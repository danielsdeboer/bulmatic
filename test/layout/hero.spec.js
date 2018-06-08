import { mount } from '@vue/test-utils'
import expect from 'expect'

import Hero from '../../src/components/layout/Hero.vue'

describe('Hero', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Hero, { slots: { default: '<p class="testing"/>' } })
  })

  it('outputs div', () => {
    expect(wrapper.is('div.hero')).toBe(true)
  })

  it('slots default content inside div.hero-body', () => {
    const body = wrapper.find('div.hero-body')

    expect(body.contains('p.testing')).toBe(true)
  })

  it('slot default content inside a container by default', () => {
    const body = wrapper.find('div.hero-body')

    expect(body.contains('div.container')).toBe(true)

    const container = body.find('div.container')

    expect(container.contains('p.testing')).toBe(true)
  })

  it('has no container if has-container is false', () => {
    wrapper.setProps({ hasContainer: false })
    const body = wrapper.find('div.hero-body')

    expect(body.contains('div.container')).toBe(false)
    expect(body.contains('p.testing')).toBe(true)
  })

  it('has a color props', () => {
    wrapper.setProps({ color: 'primary' })

    expect(wrapper.is('div.hero.is-primary'))
  })

  it('has an is-bold prop', () => {
    wrapper.setProps({ isBold: true })

    expect(wrapper.is('div.hero.is-bold'))
  })

  it('has a size prop', () => {
    wrapper.setProps({ size: 'fullwidth' })

    expect(wrapper.is('div.hero.is-fullwidth'))

    wrapper.setProps({ size: 'large' })

    expect(wrapper.is('div.hero.is-large'))
  })

  it('has a head component when the head slot is used ', () => {
    expect(wrapper.contains('div.hero-head')).toBe(false)

    wrapper = mount(Hero, { slots: { head: '<p class="head-test"/>' } })

    const head = wrapper.find('div.hero-head')

    expect(head.contains('p.head-test')).toBe(true)
  })

  it('has a foot component when the foot slot is used ', () => {
    expect(wrapper.contains('div.hero-foot')).toBe(false)

    wrapper = mount(Hero, { slots: { foot: '<p class="foot-test"/>' } })

    const foot = wrapper.find('div.hero-foot')

    expect(foot.contains('p.foot-test')).toBe(true)
  })
})
