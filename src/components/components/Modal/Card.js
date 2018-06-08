import Head from './Card/Head'
import { str } from '../../../functions/validators'

const renderHead = (h, textContent) => h(Head, { props: { textContent } })

export default {
  functional: true,

  props: {
    titleText: str(true),
  },

  render: (h, ctx) => h(
    'div',
    { class: 'modal-card' },
    [
      renderHead(h, ctx.props.titleText),
      ctx.slots().default,
    ]
  ),
}
