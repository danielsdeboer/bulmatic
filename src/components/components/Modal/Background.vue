<template>
  <div
    @click="emitClose"
    class="modal-background"
  />
</template>

<script>
  export default {
    methods: {
      emitClose () {
        this.$emit('modal-close')
      },
    },
  }
</script>
