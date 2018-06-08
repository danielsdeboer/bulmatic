import Title from './Title'

export default {
  functional: true,

  render: (h, ctx) => h(
    'div',
    { class: 'modal-card-head' },
    [
      h(
        Title,
        ctx.slots().default
      ),
    ]
  ),
}
