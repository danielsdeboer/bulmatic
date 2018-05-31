<template>
  <div class="columns" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
import props, { bools } from '../../definitions/props/columns'
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
  @import "~bulma/sass/grid/columns"
</style>


