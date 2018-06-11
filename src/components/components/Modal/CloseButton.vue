<template>
  <button
    @click="emitClose"
    class="modal-close is-large"
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
