import { mount } from '@vue/test-utils'
import expect from 'expect'

import Pagination from '../../src/components/components/Pagination.vue'

describe('Pagination', () => {
  let wrapper
  const slot = '<li class="some-thing"/>'

  beforeEach(() => {
    wrapper = mount(Pagination, { slots: { default: slot } })
  })

  it('outputs a nav', () => {
    expect(wrapper.is('nav.pagination')).toBe(true)
  })

  it('slots contentinto the pagination list', () => {
    const list = wrapper.find('ul')

    expect(list.contains('li.some-thing')).toBe(true)
  })

  it('has incrementals unless has-incrementals is false', () => {
    const expected = () => wrapper.contains('a.pagination-next') && wrapper.contains('a.pagination-previous')

    expect(expected()).toBe(true)

    wrapper.setProps({ hasIncrementals: false })

    expect(expected()).toBe(false)
  })

  it('slots content into the incrementals slot', () => {
    wrapper = mount(Pagination, { slots: { incrementals: '<a class="slot-test"/>' } })

    expect(wrapper.contains('a.slot-test')).toBe(true)
  })

  it('has an alignment prop', () => {
    expect(wrapper.is('.is-centered') && wrapper.is('.is-right')).toBe(false)

    wrapper.setProps({ alignment: 'centered' })

    expect(wrapper.is('.is-centered')).toBe(true)

    wrapper.setProps({ alignment: 'right' })

    expect(wrapper.is('.is-right')).toBe(true)
  })

  it('has an is-rounded prop', () => {
    const exp = () => wrapper.is('.is-rounded')

    expect(exp()).toBe(false)

    wrapper.setProps({ isRounded: true })

    expect(exp()).toBe(true)
  })

  it('has a size prop', () => {
    const sizes = ['small', 'medium', 'large']

    sizes.forEach((size) => {
      wrapper.setProps({ size })

      expect(wrapper.is(`.is-${size}`)).toBe(true)
    })
  })

  it('catches and re-emits previous-page events', () => {
    const el = wrapper.find('a.pagination-previous')

    expect(wrapper.emitted('previous-page')).toBeFalsy()

    el.trigger('click')

    expect(wrapper.emitted('previous-page')).toBeTruthy()
  })

  it('catches and re-emits next-page events', () => {
    const el = wrapper.find('a.pagination-next')

    expect(wrapper.emitted('next-page')).toBeFalsy()

    el.trigger('click')

    expect(wrapper.emitted('next-page')).toBeTruthy()
  })
})
