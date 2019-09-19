<template>
  <div class="home-container">{{welcome}}</div>
</template>
<script>
export default {
  computed: {
    welcome() {
      return this.$store.getters.welcome;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>