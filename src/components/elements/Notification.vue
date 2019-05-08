<template>
  <div
    class="notification"
    :class="cssClasses"
  >
    <button
      v-if="hasButton"
      @click.prevent="buttonPress"
      class="delete"
    />
    <slot/>
  </div>
</template>

<script>
import props, { strings, bools } from '../../definitions/props/notification'
import stringsToClasses from '../../functions/strings-to-classes'
import boolsToClasses from '../../functions/booleans-to-classes'

export default {
  props,

  computed: {
    cssClasses () {
      return [
        ...this.boolClasses,
        ...this.stringClasses,
      ]
    },

    boolClasses () {
      return boolsToClasses(this, bools)
    },

    stringClasses () {
      return stringsToClasses(this, strings)
    },
  },

  methods: {
    buttonPress () {
      this.$emit('close-notification')
    },
  },
}
</script>
