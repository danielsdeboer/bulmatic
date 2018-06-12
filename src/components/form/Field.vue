<script>
  import props, { bools } from '../../definitions/props/field'
  import boolsToClasses from '../../functions/booleans-to-classes'
  import Label from './Label.vue'

  export default {
    render (h) {
      return h(
        'div',
        { class: this.cssClasses },
        [
          this.label,
          this.$slots.default,
        ]
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

      hasLabel () {
        return !!this.labelText
      },

      label () {
        return this.hasLabel
          ? this.$createElement(Label, this.labelText)
          : ''
      },
    },
  }
</script>

<style lang="sass">
  .input
    box-sizing: border-box
</style>


<style lang="sass" scoped>
  @import "~bulma/sass/utilities/_all"
  @import "~bulma/sass/elements/form.sass"
</style>

