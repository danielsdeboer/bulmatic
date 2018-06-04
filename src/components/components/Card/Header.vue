<template>
  <div class="card-header">
    <p
      class="card-header-title"
      v-text="textContent"
    />
  </div>
</template>

<script>
  import { str } from '../../../functions/validators'

  export default {
    props: {
      textContent: str(true),
    },
  }
</script>
