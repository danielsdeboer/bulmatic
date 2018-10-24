<template>
  <div class="card">
    <CardHeader
      v-if="hasHeader"
      @icon-click="emitHeaderIconClick"
      :text-content="headerText"
      :iconColor="headerIconColor"
      :iconSize="headerIconSize"
      :icon="headerIcon"
    />

    <CardContent>
      <slot/>
    </CardContent>

    <CardFooter
      v-if="hasFooter"
    >
      <slot name="footer"/>
    </CardFooter>
  </div>
</template>

<script>
  import CardHeader from './Card/Header.vue'
  /* eslint-disable import/extensions */
  import CardContent from './Card/Content.js'
  import CardFooter from './Card/Footer.js'
  /* eslint-enable import/extensions */
  import { str } from '../../functions/validators'

  export default {
    props: {
      headerText: str(false),
      headerIconColor: str(false),
      headerIconSize: str(false),
      headerIcon: str(false),
      cardName: str(false),
    },

    components: {
      CardHeader,
      CardContent,
      CardFooter,
    },

    computed: {
      hasHeader () {
        return !!this.headerText
      },

      hasFooter () {
        return !!this.$slots.footer
      },

      computedCardName () {
        return this.cardName || ''
      },
    },

    methods: {
      emitHeaderIconClick () {
        this.$emit('header-icon-click', {
          cardName: this.computedCardName,
        })
      },
    },
  }
</script>
