<template>
  <li>
    <a
      class="pagination-link"
      :class="classes"
    >
      <template
        v-if="hasTextContent"
      >
        {{ textContent }}
      </template>

      <slot
        v-else
      />
    </a>
  </li>
</template>

<script>
  import { bool, multi } from '../../../functions/validators'

  export default {
    props: {
      isCurrent: bool(false),
      textContent: multi([String, Number], false),
    },

    computed: {
      classes () {
        return {
          'is-current': this.isCurrent,
        }
      },

      hasTextContent () {
        return !!this.textContent
      },
    },
  }
</script>
