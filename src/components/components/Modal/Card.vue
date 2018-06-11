<template>
  <div class="modal-card">
    <Head
      :text-content="titleText"
      @modal-close="emitClose"
    />

    <Body>
      <slot/>
    </Body>

    <Foot
      @modal-cancel="emitCancel"
      @modal-save-changes="emitSaveChanges"
    >
      <slot name="foot"/>
    </Foot>
  </div>
</template>

<script>
import Head from './Card/Head.vue'
import Body from './Card/Body.vue'
import Foot from './Card/Foot.vue'
import { str } from '../../../functions/validators'

export default {
  props: {
    titleText: str(true),
  },

  components: {
    Head,
    Body,
    Foot,
  },

  methods: {
    emitSaveChanges () {
      this.$emit('modal-save-changes')
    },

    emitCancel () {
      this.$emit('modal-cancel')
    },

    emitClose () {
      this.$emit('modal-close')
    },
  },
}
</script>

