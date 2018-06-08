import { mount } from '@vue/test-utils'
import expect from 'expect'

import Ellipsis from '../../src/components/components/Pagination/Ellipsis.vue'

describe('Pagination Ellipsis', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Ellipsis)
  })

  it('outputs a list item with a nested span', () => {
    expect(wrapper.is('li') && wrapper.contains('span.pagination-ellipsis')).toBe(true)
  })
})
