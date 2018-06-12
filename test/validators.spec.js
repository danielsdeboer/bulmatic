import expect from 'expect'
import * as v from '../src/functions/validators'

class TestClass {}

describe('validators', () => {
  it('returns an object-of-type validator defaulting to not required', () => {
    let val = v.objOf(TestClass)

    expect(val.type).toBe(TestClass)
    expect(val.required).toBe(false)

    val = v.objOf(TestClass, true)

    expect(val.required).toBe(true)
  })

  it('returns a plain object validator', () => {
    let val = v.obj(true)

    expect(val.type).toBe(Object)
    expect(val.required).toBe(true)

    val = v.obj(false)

    expect(val.required).toBe(false)

    const obj = { test: 'object' }
    val = v.obj(obj)

    expect(val.default).toBe(obj)
  })

  it('returns an array validator', () => {
    let val = v.arr(true)

    expect(val.type).toBe(Array)
    expect(val.required).toBe(true)

    val = v.arr(false)

    expect(val.required).toBe(false)

    const arr = ['test', 'array']
    val = v.arr(arr)

    expect(val.default).toBe(arr)
  })

  it('returns a string validator', () => {
    let val = v.str(true)

    expect(val.type).toBe(String)
    expect(val.required).toBe(true)

    val = v.str(false)

    expect(val.required).toBe(false)

    const str = 'a gosh darn string'
    val = v.arr(str)

    expect(val.default).toBe(str)
    expect(val.required).toBe(undefined)
  })

  it('returns a multi validator', () => {
    const types = [String, Object]
    let val = v.multi(types, true)

    expect(val.type).toBe(types)
    expect(val.required).toBe(true)

    val = v.multi(types, false)

    expect(val.required).toBe(false)

    const str = 'default string'
    val = v.multi(types, str)

    expect(val.default).toBe(str)
    expect(val.required).toBe(undefined)

    const validator = () => 'string'
    val = v.multi(types, str, validator)

    expect(val.validator).toBe(validator)
  })
})
