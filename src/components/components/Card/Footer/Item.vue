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
  import { str } from '../../../../functions/validators'

  export default {
    props: {
      itemName: str(false),
    },

    methods: {
      emitFooterItemClick () {
        this.$emit('footer-item-click', {
          itemName: this.itemName || '',
        })
      },
    },
  }
</script>
