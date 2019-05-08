<template>
  <span
    class="icon"
    :class="containerClasses"
  >
    <i
      v-if="hasIcon"
      :class="iconClasses"
    />

    <slot
      v-else
    />
  </span>
</template>

<script>
  import { str } from '../../functions/validators'
  import props, { color, size } from '../../definitions/props/icon'
  import stringsToClasses from '../../functions/strings-to-classes'
  import hasTextJoin from '../../functions/has-text-join'

  export default {
    props: Object.assign({}, props, {
      icon: str(),
    }),

    computed: {
      containerClasses () {
        return [
          ...stringsToClasses(this, color, hasTextJoin),
          ...stringsToClasses(this, size),
        ]
      },

      iconClasses () {
        return this.icon
      },

      hasIcon () {
        return !!this.icon
      },
    },
  }
</script>
