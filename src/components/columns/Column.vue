<template>
  <div class="column" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  import props, { bools } from '../../definitions/props/column'
  import boolToClass from '../../functions/booleans-to-classes'

  export default {
    props,

    computed: {
      boolClasses () {
        return boolToClass(this, bools)
      },

      sizeClass () {
        return this.size
          ? ['is', this.size].join('-')
          : ''
      },

      offsetClass () {
        return this.offset
          ? ['is-offset', this.offset].join('-')
          : ''
      },

      classes () {
        return [
          ...this.boolClasses,
          this.sizeClass,
          this.offsetClass,
        ]
      },
    },
  }
</script>
