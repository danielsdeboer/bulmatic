<template>
  <div class="container" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  import props, { bools } from '../../definitions/props/container'
  import boolToClass from '../../functions/booleans-to-classes'

  export default {
    props,

    computed: {
      classes () {
        return boolToClass(this, bools)
      },
    },
  }
</script>

<style lang="sass">
  @import "~bulma/sass/utilities/_all"
  @import "~bulma/sass/elements/container.sass"
</style>

