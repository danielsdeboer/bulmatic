<template>
  <a
    @click.prevent="emitFooterItemClick"
    href="#"
    class="card-footer-item"
  >
    <slot/>
  </a>
</template>

<script>
  export default {
    methods: {
      emitFooterItemClick () {
        this.$emit('footer-item-click')
      },
    },
  }
</script>
