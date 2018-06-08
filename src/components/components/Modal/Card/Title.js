function render (h, ctx) {
  console.log(ctx.props, ctx.slots().default)

  return h(
    'p',
    { class: 'modal-card-title' },
    ctx.props.textContent
  )
}

export default {
  functional: true,

  render: (h, ctx) => render(h, ctx),
}
