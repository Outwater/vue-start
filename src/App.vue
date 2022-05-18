<template>
  <h1>{{ msg }}</h1>
  <h1>{{ count + 1 }}</h1>

  <Hello />
</template>

<script>
  import Hello from "@/components/HelloItem";
  import sampleMixin from "@/mixins/sample";

  export default {
    components: {
      Hello,
    },
    mixins: [sampleMixin],
    data() {
      return {
        msg: "hello vue!",
      };
    },
    created() {},
  };
</script>
