export default {
  functional: true,

  render: (h, ctx) => h(
    'div',
    { class: 'modal-card' },
    ctx.slots().default
  ),
}
