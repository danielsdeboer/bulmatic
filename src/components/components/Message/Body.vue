<template>
  <div
    class="message-body"
  >
    <span
      v-if="hasTextContent"
      v-text="textContent"
    ></span>

    <slot/>
  </div>
</template>

<script>
  import { str } from '../../../functions/validators'

  export default {
    props: {
      textContent: str(false),
    },

    computed: {
      hasTextContent () {
        return !!this.textContent
      },
    },
  }
</script>

<style lang="sass">
  @import "~bulma/sass/utilities/_all"
  @import "~bulma/sass/components/message"
</style>
