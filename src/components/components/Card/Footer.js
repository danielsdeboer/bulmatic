export default {
  functional: true,

  render (h, c) {
    return h(
      'div',
      {
        class: 'card-footer',
      },
      c.slots().default
    )
  },
}
