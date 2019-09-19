<template>
  <div>
    <div id="main">
      <app-header />
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "./AppHeader";
export default {
  components: {
    AppHeader
  },
  mounted() {
    console.log("Component mounted.");
  }
};
</script>
<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
