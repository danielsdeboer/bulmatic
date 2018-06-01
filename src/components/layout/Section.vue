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
      classes () {
        return [].concat(
          strToClass(this, strings),
          boolToClass(this, bools),
        )
      },
    },
  }
</script>

<style lang="sass">
  @import "~bulma/sass/utilities/_all"
  @import "~bulma/sass/layout/section.sass"
</style>

<style lang="sass" scoped>
  .is-in-flow
    padding-top: 0;
    padding-bottom: 0;
    margin-bottom: 1.5rem;
</style>


