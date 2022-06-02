<template>
  <div class="app">
    <LNB />
    <div class="app__page">
      <div class="page__header" />
      <div class="page__container">
        <RouterView />
      </div>
    </div>
  </div>
</template>
<script>
import LNB from "@/components/LNB.vue";
export default {
  components: { LNB },
};
</script>
<style lang="scss" scoped>
.app {
  display: flex;
  height: 100vh;
  font-size: 14px;
  line-height: 1.4;
  font-family: "Open Sans", sans-serif;

  &__page {
    flex-grow: 1;
    height: 100%;
    display: flex;
    flex-direction: column;

    .page__header {
      height: 80px;
    }

    .page__container {
      flex-grow: 1;
      overflow-y: auto;
    }
  }
}
</style>
