import { mount } from '@vue/test-utils'
import expect from 'expect'
import faker from 'faker'

import MenuList from '../../src/components/components/Menu/List.vue'

describe('MenuList', () => {
  const slotContent = faker.lorem.word()
  const slots = { default: slotContent }

  const comp = () => mount(MenuList, { slots })

  it('renders a ul', () => {
    expect(comp().is('ul.menu-list')).toBe(true)
  })

  it('slots content', () => {
    expect(comp().text()).toBe(slotContent)
  })
})
