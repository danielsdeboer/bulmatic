<template>
  <div
    class="level"
    :class="classes"
  >
    <LevelLeft
      v-if="$slots.left"
    >
      <slot
        name="left"
      />
    </LevelLeft>

    <slot/>

    <LevelRight
      v-if="$slots.right"
    >
      <slot
        name="right"
      />
    </LevelRight>
  </div>
</template>

<script>
  import props, { bools } from '../../definitions/props/level'
  import boolToClass from '../../functions/booleans-to-classes'

  import LevelLeft from './Level/Left.vue'
  import LevelRight from './Level/Right.vue'

  export default {
    props,

    components: {
      LevelLeft,
      LevelRight,
    },

    computed: {
      classes () {
        return boolToClass(this, bools)
      },
    },
  }
</script>

<style lang="sass">
  @import "~bulma/sass/utilities/_all"
  @import "~bulma/sass/components/level"
</style>
