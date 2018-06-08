const render = (h, ctx) => 
  // console.log(ctx.slots())

   h(
    'div',
    { class: 'modal-content' },
    ctx.slots().default
  )


export default {
  functional: true,
  render: (h, ctx) => render(h, ctx),
}
