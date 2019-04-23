<template>
  <section
    class="section"
    :class="classes"
  >
    <slot/>
  </section>
</template>

<script>
  import props, { strings, bools } from '../../definitions/props/section'
  import strToClass from '../../functions/strings-to-classes'
  import boolToClass from '../../functions/booleans-to-classes'

  export default {
    props,

    computed: {
      stringClasses () {
        return strToClass(this, strings)
      },

      boolClasses () {
        return boolToClass(this, bools)
      },

      classes () {
        return [
          ...this.stringClasses,
          ...this.boolClasses,
        ]
      },
    },
  }
</script>

<style lang="sass" scoped>
  .is-in-flow
    padding-top: 0
    padding-bottom: 0
    margin-bottom: 1.5rem
</style>


