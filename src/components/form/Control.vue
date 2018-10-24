<template>
  <div
    :class="cssClasses"
  >
    <slot/>

    <slot
      v-if="!hasLeftIcon"
      name="left"
    />

    <Icon
      v-else
      :icon="leftIcon"
      class="is-left"
    />

    <slot
      v-if="!hasRightIcon"
      name="right"
    />

    <Icon
      v-else
      :icon="rightIcon"
      class="is-right"
    />
  </div>
</template>


<script>
  import props, { bools } from '../../definitions/props/control'
  import boolsToClasses from '../../functions/booleans-to-classes'
  import Icon from '../elements/Icon.vue'

  export default {
    props,

    components: {
      Icon,
    },

    computed: {
      cssClasses () {
        return [
          'control',
          ...boolsToClasses(this, bools),
          ...boolsToClasses(this, ['hasIconsLeft', 'hasIconsRight']),
        ]
      },

      hasIconsLeft () {
        return !!this.$slots.left || this.hasLeftIcon
      },

      hasIconsRight () {
        return !!this.$slots.right || this.hasRightIcon
      },

      hasLeftIcon () {
        return !!this.leftIcon
      },

      hasRightIcon () {
        return !!this.rightIcon
      },
    },
  }
</script>
