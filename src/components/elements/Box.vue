<script>
  export default {
    render (h) {
      return h(
        'div',
        { class: 'box' },
        this.$slots.default
      )
    },
  }
</script>

<style lang="sass">
  @import "~bulma/sass/utilities/_all"
  @import "~bulma/sass/elements/box.sass"
</style>

