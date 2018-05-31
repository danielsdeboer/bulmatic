<template>
  <div class="message-header">
    {{ textContent }}

    <button
      v-if="hasButton"
      class="delete"
    />
  </div>

</template>

<script>
  import { str, bool } from '../../../functions/validators'

  export default {
    props: {
      textContent: str(true),
      hasButton: bool(false),
    },
  }
</script>
