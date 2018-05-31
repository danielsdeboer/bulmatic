import { mount } from '@vue/test-utils'
import expect from 'expect'
import { bools } from '::def/props/container'
import boolPropsTest from '../functions/bool-props-test'

import Container from '../../src/components/layout/Container.vue'

describe('Container', () => {
  let component
  const fresh = () => mount(Container)
  const boolProps = Object.keys(bools)

  beforeEach(() => {
    component = fresh()
  })

  it('outputs a container div', () => {
    expect(component.is('div.container')).toBe(true)
  })

  boolPropsTest(boolProps, 'div.container', fresh)
})
