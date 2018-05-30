import kebabCase from 'lodash.kebabcase'
import expect from 'expect'

/**
 * Loop over the boolean props, mounting the component each time.
 * @param {*} booleans
 * @param {*} mountCb
 */
export default function (booleans, cssSelector, mountCb) {
  booleans.forEach((prop) => {
    const component = mountCb()
    const cssClass = kebabCase(prop)

    it(`maps prop ${prop} to css class ${cssClass}`, () => {
      component.setProps({ [prop]: true })

      expect(component.is(`${cssSelector}.${cssClass}`)).toBe(true)
    })
  })
}
