<template>
  <button @click="log">Click me!</button>
</template>

<script>
export default {
  methods: {
    log() {
      console.log("clicked!");
    },
  },
};
</script>
