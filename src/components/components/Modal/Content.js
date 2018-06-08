export default {
  functional: true,
  render: (h, ctx) => h(
    'div',
    { class: 'modal-content' },
    ctx.props.textContent || ctx.slots().default
  ),
}
