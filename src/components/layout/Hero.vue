<template>
  <div
    class="hero"
    :class="cssClasses"
  >
    <HeroHead
      v-if="hasHead"
    >
      <slot name="head"/>
    </HeroHead>

    <HeroBody>
      <Container
        v-if="hasContainer"
      >
        <slot/>
      </Container>

      <slot
        v-else
      />
    </HeroBody>

    <HeroFoot
      v-if="hasFoot"
    >
      <slot name="foot"/>
    </HeroFoot>
  </div>
</template>

<script>
  import Container from '../layout/Container.vue'
  import HeroBody from './Hero/Body.vue'
  import HeroFoot from './Hero/Foot.vue'
  import HeroHead from './Hero/Head.vue'
  import props, { strings, bools } from '../../definitions/props/hero'
  import strToClass from '../../functions/strings-to-classes'
  import boolToClass from '../../functions/booleans-to-classes'

  export default {
    props,

    components: {
      Container,
      HeroBody,
      HeroHead,
      HeroFoot,
    },

    computed: {
      stringClasses () {
        return strToClass(this, strings)
      },

      boolClasses () {
        return boolToClass(this, bools)
      },

      cssClasses () {
        return [
          ...this.stringClasses,
          ...this.boolClasses,
        ]
      },

      hasHead () {
        return !!this.$slots.head
      },

      hasFoot () {
        return !!this.$slots.foot
      },
    },
  }
</script>
