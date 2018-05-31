<template>
  <div class="message" :class="classes">
    <MessageHeader
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
import props, { strings } from '../../definitions/props/message'
import MessageHeader from './Message/Header.vue'
import MessageBody from './Message/Body.vue'

export default {
  props: {
    headerText: str(false),
    bodyText: str(false),
    hasButton: bool(false),
    ...props,
  },

  components: { MessageHeader, MessageBody },

  computed: {
    classes () {
      return stringsToClasses(this, strings)
    },

    hasHeaderText () {
      return !!this.headerText
    },
  },
}
</script>

<style lang="sass">
  @import "~bulma/sass/utilities/_all"
  @import "~bulma/sass/components/message"
</style>
