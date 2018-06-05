<template>
  <li>
    <a
      class="pagination-link"
      :class="classes"
    >
      <slot/>
    </a>
  </li>
</template>

<script>
  import { bool } from '../../../functions/validators'

  export default {
    props: {
      isCurrent: bool(false),
    },

    computed: {
      classes () {
        return {
          'is-current': this.isCurrent,
        }
      },
    },
  }
</script>
