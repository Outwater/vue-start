<template>
  <h1>World</h1>
  {{ msg }}
  <h3>{{ count }}</h3>

  <button @click="decreaseCount">감소</button>
  <h3>double: {{ double }}</h3>
  <h3>reverse: {{ reversedMsg }}</h3>
</template>

<script>
  import { state, getters, mutations } from "@/store";
  export default {
    data() {
      return state;
    },
    computed: {
      reversedMsg: getters.reversedMsg,
      double() {
        return this.count * 2;
      },
    },
    methods: {
      decreaseCount: mutations.decreaseCount,
    },
  };
</script>
<style scoped lang="scss">
  $color: royalblue;
  h1 {
    color: $color;
  }
</style>
