<template>
  <h1>Hello</h1>
  {{ msg }}
  {{ count }}
  <button @click="increaseCount">증가</button>
  <button @click="fetchTodo">fetchTodo!</button>
</template>

<script>
  import { state, mutations, actions } from "@/store";
  export default {
    data() {
      return state;
    },
    methods: {
      increaseCount: mutations.increaseCount,
      fetchTodo: actions.fetchTodo,
    },
  };
</script>
<style scoped lang="scss">
  $color: red;
  h1 {
    color: $color;
  }
</style>
