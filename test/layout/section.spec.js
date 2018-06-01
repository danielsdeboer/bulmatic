import { mount } from '@vue/test-utils'
import expect from 'expect'
import Section from '../../src/components/layout/Section.vue'

describe('Section', () => {
  let wrapper

  const fresh = () => mount(Section, {
    slots: {
      default: '<div class="test-div"/>',
    },
  })

  beforeEach(() => { wrapper = fresh() })

  it('outputs a section', () => {
    expect(wrapper.is('section.section')).toBe(true)
  })

  it('slots content', () => {
    expect(wrapper.contains('div.test-div')).toBe(true)
  })

  it('takes a size prop and outputs classes', () => {
    wrapper.setProps({ size: 'medium' })

    expect(wrapper.is('section.section.is-medium')).toBe(true)
  })
})
