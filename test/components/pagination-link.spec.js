import { mount } from '@vue/test-utils'
import expect from 'expect'

import Link from '../../src/components/components/Pagination/Link.vue'

describe('Container', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Link, {
      slots: {
        default: '67',
      },
    })
  })

  it('outputs a list item with nested anchor', () => {
    expect(wrapper.is('li') && wrapper.contains('a.pagination-link')).toBe(true)
  })

  it('slots content inside the anchor', () => {
    expect(wrapper.find('a').text()).toBe('67')
  })

  it('has an is-current prop', () => {
    expect(wrapper.find('a').is('.is-current')).toBe(false)

    wrapper.setProps({ isCurrent: true })

    expect(wrapper.find('a').is('.is-current')).toBe(true)
  })
})
