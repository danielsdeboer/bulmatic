<script>
  import Label from './Field/Label.vue'
  import Body from './Field/Body.vue'

  export default {
    render (h) {
      return h(
        'div',
        { class: this.cssClasses },
        [this.label(), this.body()]
      )
    },

    computed: {
      cssClasses () {
        return [
          'field',
          'is-horizontal',
        ]
      },
    },

    methods: {
      label () {
        return this.$createElement(Label, this.$slots.label)
      },

      body () {
        return this.$createElement(Body, this.$slots.body)
      },
    },
  }
</script>

<style lang="sass" scoped>
  @import "~bulma/sass/utilities/_all"
  @import "~bulma/sass/elements/form.sass"
</style>

