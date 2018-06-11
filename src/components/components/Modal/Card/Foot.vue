<template>
  <div class="modal-card-foot">
    <template
      v-if="!hasSlottedContent"
    >
      <Button
        @click.native.prevent="emitSaveChanges"
        color="success"
        text-content="Save Changes"
      />

      <Button
        @click.native.prevent="emitCancel"
        class="is-modal-cancel"
        text-content="Cancel"
      />
    </template>

    <slot
      v-else
    />
  </div>
</template>

<script>
import Button from '../../../elements/Button.vue'

export default {
  components: {
    Button,
  },

  computed: {
    hasSlottedContent () {
      return !!this.$slots.default
    },
  },

  methods: {
    emitSaveChanges () {
      this.$emit('modal-save-changes')
    },

    emitCancel () {
      this.$emit('modal-cancel')
    },
  },
}
</script>
