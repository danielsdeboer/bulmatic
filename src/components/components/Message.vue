<template>
  <div class="message" :class="classes">
    <MessageHeader
      v-if="has('headerText')"
      :text="headerText"
      :has-button="hasButton"
    />

    <MessageBody
      :text="bodyText"
    />

    <slot/>
  </div>
</template>

<script>
import MessageHeader from './Message/Header.vue'
import MessageBody from './Message/Body.vue'

import { str, multi } from '::func/validator-factory'

const colors = ['danger', 'warning', 'success', 'info', 'link', 'primary', 'dark']
const sizes = ['small', 'medium', 'large']

export default {
  props: {
    headerText: str(false),
    hasButton: str(false),
    bodyText: multi([Array, String], false),
    size: str(false, sizes),
    color: str(false, colors),
  },

  components: { MessageHeader, MessageBody },

  computed: {
    classes () {
      return [bulmaClass(this.color), bulmaClass(this.size)]
    },

  },
}
</script>
