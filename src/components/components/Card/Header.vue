<template>
  <div class="card-header">
    <p
      class="card-header-title"
      v-text="textContent"
    />

    <a
      @click.prevent="emitIconClicked"
      v-if="hasIcon"
      href="#"
      class="card-header-icon"
    >
      <Icon
        :color="iconColor"
        :icon="iconClass"
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
      iconClass: str(false),
      iconColor: str(false),
      iconSize: str(false),
    },

    components: {
      Icon,
    },

    computed: {
      hasIcon () {
        return !!this.iconClass
      },
    },

    methods: {
      emitIconClicked () {
        this.$emit('icon-clicked')
      },
    },
  }
</script>
