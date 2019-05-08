import { mount } from '@vue/test-utils'
import expect from 'expect'
import faker from 'faker'

import MenuLabel from '../../src/components/components/Menu/Label.vue'

describe('MenuLabel', () => {
  const word = () => faker.lorem.word()
  const slotContent = word()
  const slots = { default: slotContent }

  const propContent = word()
  const propsData = { textContent: propContent }

  const comp = () => mount(MenuLabel)
  const slotted = () => mount(MenuLabel, { slots })
  const propped = () => mount(MenuLabel, { propsData })

  it('renders a p', () => {
    expect(comp().is('p.menu-label')).toBe(true)
  })

  it('slots content if no textContent prop is provided', () => {
    expect(slotted().text()).toBe(slotContent)
  })

  it('renders textContent prop if provided', () => {
    expect(propped().text()).toBe(propContent)
    expect(propped().text()).not.toBe(slotContent)
  })
})
