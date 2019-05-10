<template>
  <div
    class="level"
    :class="classes"
  >
    <LevelLeft v-if="hasLeftSlot"
    >
      <slot name="left"/>
    </LevelLeft>

    <slot/>

    <LevelRight v-if="hasRightSlot">
      <slot name="right"/>
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

      hasLeftSlot () {
        return !!this.$slots.left
      },

      hasRightSlot () {
        return !!this.$slots.right
      },
    },
  }
</script>
