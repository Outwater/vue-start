<template>
  <Hello />
  <World />
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
      return {};
    },
    methods: {},
  };
</script>
