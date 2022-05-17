<template>
  <h1>{{ msg }}</h1>
  <Button @click="reverseMsg" />
  <Hello :message="msg" :name="123" />
</template>

<script>
import Hello from "@/components/Hello";
import Button from "@/components/Button";

export default {
  components: {
    Hello,
    Button,
  },
  data() {
    return {
      msg: "Hello Vue in App!!!",
    };
  },
  methods: {
    reverseMsg() {
      this.msg = this.msg.split("").reverse().join("");
    },
    log() {
      console.log(this.msg);
    },
  },
};
</script>
<style lang="scss">
$color: orange;
h1 {
  color: $color;
}
</style>
