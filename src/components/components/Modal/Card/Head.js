import Title from './Title'
import CloseButton from './CloseButton'

export default {
  functional: true,

  render: (h, ctx) => h(
    'div',
    { class: 'modal-card-head' },
    [
      h(
        Title,
        ctx.props.textContent || ctx.slots().default
      ),
      h(
        CloseButton
      ),
    ]
  ),
}
