<template>
  <a
    :class="cssClass"
    v-text="text"
    :disabled="isDisabled"
    @click.prevent="emitPageChange"
  />
</template>

<script>
  import startCase from 'lodash.startcase'
  import { str, bool } from '../../../functions/validators'

  export default {
    props: {
      direction: str(true, ['previous', 'next']),
      textContent: str(false),
      isDisabled: bool(false),
    },

    computed: {
      cssClass () {
        return `pagination-${this.direction}`
      },

      text () {
        return this.textContent || startCase(this.direction)
      },
    },

    methods: {
      emitPageChange () {
        !this.isDisabled && this.$emit(`${this.direction}-page`)
      },
    },
  }
</script>

<style lang="sass" scoped>
  a
    cursor: pointer
</style>

