import Title from './Title.vue'
import CloseButton from './CloseButton.vue'

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
