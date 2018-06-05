<template>
  <nav class="pagination" :class="classes">
    <template
      v-if="hasIncrementals"
    >
      <PaginationIncremental
        direction="previous"
        :is-disabled="previousIsDisabled"
        @previous-page="emitPageChange('previous')"
      />

      <PaginationIncremental
        direction="next"
        :is-disabled="nextIsDisabled"
        @next-page="emitPageChange('next')"
      />
    </template>

    <slot name="incrementals"/>

    <PaginationList>
      <slot/>
    </PaginationList>
  </nav>
</template>

<script>
import stringsToClasses from '../../functions/strings-to-classes'
import boolsToClasses from '../../functions/booleans-to-classes'
import props, { strings, bools } from '../../definitions/props/pagination'
import { bool } from '../../functions/validators'
import PaginationIncremental from './Pagination/Incremental.vue'
import PaginationList from './Pagination/List.vue'

export default {
  props: Object.assign(props, {
    hasIncrementals: bool(true),
    previousIsDisabled: bool(false),
    nextIsDisabled: bool(false),
  }),

  components: {
    PaginationIncremental,
    PaginationList,
  },

  computed: {
    classes () {
      return [
        ...this.stringClasses,
        ...this.boolClasses,
      ]
    },

    stringClasses () {
      return stringsToClasses(this, strings)
    },

    boolClasses () {
      return boolsToClasses(this, bools)
    },
  },

  methods: {
    emitPageChange (direction) {
      this.$emit(`${direction}-page`)
    },
  },
}
</script>

<style lang="sass">
  @import "~bulma/sass/utilities/_all"
  @import "~bulma/sass/components/pagination"
</style>
