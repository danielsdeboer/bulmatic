<template>
  <section
    class="section"
    :class="classes"
  >
    <slot/>
  </section>
</template>

<script>
  import props, { strings } from '../../definitions/props/section'
  import strToClass from '../../functions/strings-to-classes'

  export default {
    props,

    computed: {
      classes () {
        return strToClass(this, strings)
      },
    },
  }
</script>

<style lang="sass">
  @import "~bulma/sass/utilities/_all"
  @import "~bulma/sass/layout/section.sass"
</style>

