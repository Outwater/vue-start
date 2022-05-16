<template>
  <h1>{{ msg }}</h1>
  <Hello />
</template>

<script>
import Hello from "@src/components/Hello";

export default {
  components: {
    Hello,
  },
  data() {
    return {
      msg: "Hello Vue!!!~?~?!1!",
    };
  },
};
</script>

//
<style lang="css">
h1 {
  color: red;
}
</style>
