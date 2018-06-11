import { str } from '../../../functions/validators'

export default {
  props: {
    textContent: str(false),
  },

  render (h) {
    return h(
      'div',
      { class: 'modal-content' },
      this.textContent || this.$slots.default
    )
  },
}
