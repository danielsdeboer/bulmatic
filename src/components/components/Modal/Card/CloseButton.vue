<template>
  <button
    @click="emitClose"
    class="delete"
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
