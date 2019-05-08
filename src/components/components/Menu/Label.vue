<template>
  <p class="menu-label">
    <template v-if="textContent">{{ textContent }}</template>
    
    <slot v-else/>
  </p>
</template>

<script>
  export default {
    props: {
      textContent: {
        type: String,
        required: false,
      },
    },
  }
</script>