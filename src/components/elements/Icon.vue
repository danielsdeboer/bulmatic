<template>
  <span
    class="icon"
    :class="containerClasses"
  >
    <i
      :class="iconClasses"
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
      icon: str(true),
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
    },
  }
</script>
