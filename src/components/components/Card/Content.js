export default {
  functional: true,

  render (h, c) {
    return h(
      'div',
      {
        class: 'card-content',
      },
      c.slots().default
    )
  },
}
