<template>
  <div class="message" :class="classes">
    <MessageHeader
      @close-message="emitCloseMessage"
      v-if="hasHeaderText"
      :text-content="headerText"
      :has-button="hasButton"
    />

    <MessageBody
      :text-content="bodyText"
    >
      <slot/>
    </MessageBody>
  </div>
</template>

<script>
import { str, bool } from '../../functions/validators'
import stringsToClasses from '../../functions/strings-to-classes'
import boolsToClasses from '../../functions/booleans-to-classes'
import props, { strings, bools } from '../../definitions/props/message'
import MessageHeader from './Message/Header.vue'
import MessageBody from './Message/Body.vue'

export default {
  props: Object.assign({
    headerText: str(false),
    bodyText: str(false),
    hasButton: bool(false),
  }, props),

  components: { MessageHeader, MessageBody },

  computed: {
    classes () {
      return [
        ...this.boolClasses,
        ...this.stringClasses,
      ]
    },

    boolClasses () {
      return boolsToClasses(this, bools)
    },

    stringClasses () {
      return stringsToClasses(this, strings)
    },

    hasHeaderText () {
      return !!this.headerText
    },
  },

  methods: {
    emitCloseMessage () {
      this.$emit('close-message')
    },
  },
}
</script>

<style lang="sass" scoped>
  @import "~bulma/sass/utilities/_all"
  @import "~bulma/sass/components/message"
</style>

<style lang="sass" scoped>
  .is-bordered
    .message-body
      border-width: 1px
</style>

