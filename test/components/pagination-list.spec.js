import { mount } from '@vue/test-utils'
import expect from 'expect'

import List from '../../src/components/components/Pagination/List.vue'

describe('Pagination List', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(List, {
      slots: {
        default: '<li class="test-item"/>',
      },
    })
  })

  it('outputs an unordered list', () => {
    expect(wrapper.is('ul.pagination-list')).toBe(true)
  })

  it('slots content', () => {
    expect(wrapper.contains('li.test-item')).toBe(true)
  })
})
