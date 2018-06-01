<template>
  <div class="message-header">
    {{ textContent }}

    <button
      @click.once="emitCloseMessage"
      v-if="hasButton"
      class="delete"
    />
  </div>

</template>

<script>
  import { str, bool } from '../../../functions/validators'

  export default {
    props: {
      textContent: str(true),
      hasButton: bool(false),
    },

    methods: {
      emitCloseMessage () {
        this.$emit('close-message')
      },
    },
  }
</script>

<style lang="sass">
  @import "~bulma/sass/utilities/_all"
  @import "~bulma/sass/elements/other"
</style>
