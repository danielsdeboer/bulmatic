<script>
  export default {
    render (h) {
      return h(
        'div',
        { class: 'field-body' },
        this.$slots.default
      )
    },
  }
</script>

<style lang="sass" scoped>
  @import "~bulma/sass/utilities/_all"
  @import "~bulma/sass/elements/form.sass"
</style>
