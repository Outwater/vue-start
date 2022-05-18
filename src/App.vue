<template>
  <div>
    {{ msg }}
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: "hello vue!",
      };
    },
    created() {
      this.$myName("https://jsonplaceholder.typicode.com/todos/1").then((res) =>
        console.log(res)
      );
    },
  };
</script>
