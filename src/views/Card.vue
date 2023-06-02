<template>
  <div>
    <h1>Hello it from card.vue</h1>
    <!-- Content for the Card component -->
  </div>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: {
  },
  name: 'Card',
  // Component options and logic
}
</script>

<style scoped>
/* Component-specific styles */
</style>