<template>
  <ul class="pagination-list">
    <slot/>
  </ul>
</template>

<script>
  export default {}
</script>

<style lang="sass" scoped>
  .pagination-list
    list-style-type: none

    li
      cursor: pointer
</style>
