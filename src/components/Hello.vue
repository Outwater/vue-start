<template>
  <h1 @click="updateMsg">{{ newMsg }}</h1>
  <h2>{{ name }}</h2>
</template>

<script>
export default {
  props: ["message", "name"],
  props: { message: String, name: [Number, String] },
  data() {
    return {
      newMsg: this.message,
    };
  },
  methods: {
    updateMsg() {
      this.newMsg = "Good~";
    },
  },
};
</script>

<style scoped lang="scss">
$color: red;
h1 {
  color: $color;
}
</style>
