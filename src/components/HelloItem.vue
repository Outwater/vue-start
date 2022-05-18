<template>
  <h1>{{ msg }}</h1>
  <h1>{{ count }}</h1>
</template>

<script>
  import sampleMixin from "@/mixins/sample";

  export default {
    mixins: [sampleMixin],
    created() {
      console.log("Hello 생성");
    },
    unmounted() {
      console.log("Hello 삭제");
    },
  };
</script>
<style scoped lang="scss">
  $color: red;
  h1 {
    color: $color;
  }
</style>
