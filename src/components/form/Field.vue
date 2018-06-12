<script>
  import props, { bools } from '../../definitions/props/field'
  import boolsToClasses from '../../functions/booleans-to-classes'

  export default {
    render (h) {
      return h(
        'div',
        { class: this.cssClasses },
        this.$slots.default
      )
    },

    props,

    computed: {
      cssClasses () {
        return [
          'field',
          ...boolsToClasses(this, bools),
        ]
      },
    },
  }
</script>

<style lang="sass" scoped>
  @import "~bulma/sass/utilities/_all"
  @import "~bulma/sass/elements/form.sass"
</style>

