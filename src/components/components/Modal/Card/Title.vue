<template>
  <p class="modal-card-title">
    <template
      v-if="hasTextContent"
    >
      {{ textContent }}
    </template>

    <slot
      v-else
    />
  </p>
</template>

<script>
  import { str } from '../../../../functions/validators'

  export default {
    props: {
      textContent: str(false),
    },

    computed: {
      hasTextContent () {
        return !!this.textContent
      },
    },
  }
</script>
