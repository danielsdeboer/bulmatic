<template>
  <div class="card-header">
    <p
      class="card-header-title"
      v-text="textContent"
    />

    <a
      @click.prevent="emitIconClick"
      v-if="hasIcon"
      class="card-header-icon"
    >
      <Icon
        :color="iconColor"
        :icon="icon"
        :size="iconSize"
      />
    </a>
  </div>
</template>

<script>
  import { str } from '../../../functions/validators'
  import Icon from '../../elements/Icon.vue'

  export default {
    props: {
      textContent: str(true),
      icon: str(false),
      iconColor: str(false),
      iconSize: str(false),
    },

    components: {
      Icon,
    },

    computed: {
      hasIcon () {
        return !!this.icon
      },
    },

    methods: {
      emitIconClick () {
        this.$emit('icon-click')
      },
    },
  }
</script>
