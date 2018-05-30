<template>
  <div class="columns" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
import props from '../../definitions/props/columns'
import boolToClass from '../../functions/booleans-to-classes'

export default {
  props: { ...props.bools },

  computed: {
    classes () {
      return boolToClass(this, props.bools)
    },
  },
}
</script>

<style lang="sass" scoped>
  @import "~bulma/sass/utilities/_all"
  @import "~bulma/sass/grid/columns"
</style>


