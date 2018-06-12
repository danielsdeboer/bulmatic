<script>
  export default {
    render (h) {
      return h(
        'label',
        { class: 'label' },
        this.$slots.default
      )
    },
  }
</script>
