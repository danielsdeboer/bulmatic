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
