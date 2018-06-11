<template>
  <div class="modal-card-head">
    <Title>
      <template
        v-if="hasTextContent"
      >
        {{ textContent }}
      </template>

      <slot
        v-else
      />
    </Title>

    <CloseButton/>
  </div>
</template>


<script>
import { str } from '../../../../functions/validators'
import Title from './Title.vue'
import CloseButton from './CloseButton.vue'

export default {
  components: {
    Title,
    CloseButton,
  },

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
