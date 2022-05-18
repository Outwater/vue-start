<template>
  <h1>World</h1>
</template>

<script>
export default {
  created() {
    console.log("World 생성");
  },
  unmounted() {
    console.log("World 삭제");
  },
};
</script>
<style scoped lang="scss">
$color: red;
h1 {
  color: $color;
}
</style>
