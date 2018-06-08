export default {
  functional: true,

  render: (h, ctx) => h(
    'p',
    { class: 'modal-card-title' },
    ctx.props.textContent || ctx.slots().default
  ),
}
