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
