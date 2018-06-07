<script>
  import { str } from '../../functions/validators'

  export default {
    functional: true,

    render (h, { props }) {
      return h(
        props.tag,
        {
          class: 'button',
        },
        [
          'test text',
        ]
      )
    },

    props: {
      tag: str('button', ['button', 'a', 'input']),
    },
  }
</script>

<style lang="sass" scoped>
  @import "~bulma/sass/utilities/_all"
  @import "~bulma/sass/elements/button.sass"
</style>

