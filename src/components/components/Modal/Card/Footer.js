import Button from '../../../elements/Button.vue'

// const renderHead = (h, textContent) => h(Head, { props: { textContent } })
const saveButton = h => h(
  Button,
  { props: { color: 'success' } },
  'Save Changes'
)

const cancelButton = h => h(
  Button,
  { class: 'is-modal-cancel' },
  'Cancel'
)


export default {
  functional: true,

  render: (h, ctx) => h(
    'div',
    { class: 'modal-card-footer' },
    ctx.slots().default || [
      saveButton(h),
      cancelButton(h),
    ]
  ),
}
