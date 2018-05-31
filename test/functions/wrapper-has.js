export default function (wrapper, selector) {
  return wrapper.findAll(selector).length > 0
}
