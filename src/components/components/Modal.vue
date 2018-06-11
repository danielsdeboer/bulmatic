<template>
  <div class="modal is-active">
    <Background
      @modal-close="emitClose"
    />

    <Card
      v-if="isCard"
      v-bind="{ titleText }"
      @modal-cancel="emitCancel"
      @modal-save-changes="emitSaveChanges"
      @modal-close="emitClose"
    >
      <slot/>

      <template
        slot="foot"
      >
        <slot name="foot"/>
      </template>
    </Card>

    <Content
      v-else
    >
      <slot/>
    </Content>

    <CloseButton
      @modal-close="emitClose"
    />
  </div>
</template>

<script>
import { bool, str } from '../../functions/validators'
import Background from './Modal/Background.vue'
import CloseButton from './Modal/CloseButton.vue'
import Content from './Modal/Content'
import Card from './Modal/Card.vue'

export default {
  props: {
    isCard: bool(false),
    titleText: str(false),
  },

  components: {
    Background,
    CloseButton,
    Content,
    Card,
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

<style lang="sass">
  @import "~bulma/sass/utilities/_all"
  @import "~bulma/sass/components/modal"
</style>
