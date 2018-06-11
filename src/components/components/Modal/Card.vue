<template>
  <div class="modal-card">
    <Head
      :title-text="titleText"
    />

    <Body>
      <slot/>
    </Body>

  </div>
</template>

<script>
import Head from './Card/Head'
import Body from './Card/Body.vue'
import { str } from '../../../functions/validators'

// const renderHead = (h, textContent) => h(Head, { props: { textContent } })

export default {
  props: {
    titleText: str(true),
  },

  components: {
    Head,
    Body,
  },

  // render: (h, ctx) => h(
  //   'div',
  //   { class: 'modal-card' },
  //   [
  //     renderHead(h, ctx.props.titleText),
  //     ctx.slots().default,
  //   ]
  // ),
}
</script>

