<template>
  <button @click="currentComponent = 'Hello'">Hello</button>
  <button @click="currentComponent = 'World'">World</button>
  <keep-alive>
    <component :is="currentComponent" />
  </keep-alive>
</template>

<script>
import Hello from "@/components/HelloItem";
import World from "@/components/WorldItem";

export default {
  components: {
    Hello,
    World,
  },
  data() {
    return {
      msg: "hello vue!",
      currentComponent: "Hello",
    };
  },
  methods: {},
};
</script>
