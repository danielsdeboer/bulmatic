<template>
  <div class="modal">
    <Background/>

    <Card
      v-if="isCard"
    >
      <slot/>
    </Card>

    <Content
      v-else
    >
      <slot/>
    </Content>

    <CloseButton/>
  </div>
</template>

<script>
import { bool, str } from '../../functions/validators'
import Background from './Modal/Background'
import CloseButton from './Modal/CloseButton'
import Content from './Modal/Content'
import Card from './Modal/Card'

export default {
  props: {
    isCard: bool(false),
    headText: str(false),
  },

  components: {
    Background,
    CloseButton,
    Content,
    Card,
  },
}
</script>

<style lang="sass">
  @import "~bulma/sass/utilities/_all"
  @import "~bulma/sass/components/modal"
</style>
