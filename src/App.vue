<template>
  <h1>{{ msg }}</h1>
  <h1>{{ name }}</h1>
  <Hello v-model="msg" v-model:name="name" />
</template>

<script>
import Hello from "@/components/HelloItem";

export default {
  components: {
    Hello,
  },
  data() {
    return {
      msg: "hello vue!",
      name: "Outwater",
    };
  },
  methods: {},
};
</script>
