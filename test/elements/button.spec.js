import { mount } from '@vue/test-utils'
import expect from 'expect'

import Button from '../../src/components/elements/Button.vue'

describe('Button', () => {
  let wrapper

  const fresh = (context = {}) => mount(Button, context)

  beforeEach(() => {
    wrapper = fresh()
  })

  const out = () => console.log(wrapper.html())

  it('outputs a button by default', () => {
    expect(wrapper.is('button.button')).toBe(true)
  })

  it('has a button, a, or input tag depending on the tag prop', () => {
    const tags = ['button', 'a', 'input']

    tags.forEach((tag) => {
      wrapper.setProps({ tag })

      expect(wrapper.is(`${tag}.button`)).toBe(true)
    })
  })

  it('slots content', () => {
    wrapper = fresh({ slots: { default: 'some text' } })

    expect(wrapper.text()).toBe('some text')
  })

  it('alternatively takes a textContent prop', () => {
    wrapper.setProps({ textContent: 'other text' })

    expect(wrapper.text()).toBe('other text')
  })

  it('adds a type to input tags, defaulting to submit', () => {
    wrapper.setProps({ tag: 'input' })

    expect(wrapper.attributes().type).toBe('submit')

    wrapper.setProps({ tag: 'input', inputType: 'reset' })

    expect(wrapper.attributes().type).toBe('reset')
  })

  it('has a color prop', () => {
    wrapper.setProps({ color: 'text' })

    expect(wrapper.is('button.button.is-text')).toBe(true)
  })

  it('has a size prop', () => {
    wrapper.setProps({ size: 'small' })

    expect(wrapper.is('button.button.is-small')).toBe(true)
  })

  it('has an is-outlined prop', () => {
    wrapper.setProps({ isOutlined: true })

    expect(wrapper.is('button.is-outlined')).toBe(true)
  })

  it('has an is-inverted prop', () => {
    wrapper.setProps({ isInverted: true })

    expect(wrapper.is('button.is-inverted')).toBe(true)
  })

  it('has an is-rounded prop', () => {
    wrapper.setProps({ isRounded: true })

    expect(wrapper.is('button.is-rounded')).toBe(true)
  })

  it('has an is-hovered prop', () => {
    wrapper.setProps({ isHovered: true })

    expect(wrapper.is('button.is-hovered')).toBe(true)
  })

  it('has an is-active prop', () => {
    wrapper.setProps({ isActive: true })

    expect(wrapper.is('button.is-active')).toBe(true)
  })

  it('has an is-focused prop', () => {
    wrapper.setProps({ isFocused: true })

    expect(wrapper.is('button.is-focused')).toBe(true)
  })

  it('has an is-loading prop', () => {
    wrapper.setProps({ isLoading: true })

    expect(wrapper.is('button.is-loading')).toBe(true)
  })

  it('has an is-static prop', () => {
    wrapper.setProps({ isStatic: true })

    expect(wrapper.is('button.is-static')).toBe(true)
  })

  it('optionally includes an icon', () => {
    wrapper.setProps({ icon: 'fas fa-user' })

    expect(wrapper.contains('i.fas.fa-user')).toBe(true)
  })

  it('renders only an icon if no text-content or slotted content is provided', () => {
    wrapper.setProps({ icon: 'fas fa-user' })

    expect(wrapper.findAll('span').length).toBe(1)

    wrapper.setProps({ textContent: 'testing' })

    expect(wrapper.findAll('span').length).toBe(2)

    wrapper = mount(Button, {
      slots: {
        default: 'testing slots',
      },
      propsData: {
        icon: 'fas fa-user',
      },
    })

    expect(wrapper.findAll('span').length).toBe(2)
  })
})
