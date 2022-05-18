<template>
  <div v-if="!isEdit">
    {{ msg }}
    <button @click="onEdit">Edit</button>
  </div>
  <div v-else>
    <input
      ref="input"
      v-model="msg"
      type="text"
      @keyup.enter="isEdit = false"
    />
  </div>
</template>

<script>
  import { nextTick } from "@vue/runtime-core";
  export default {
    data() {
      return {
        msg: "hello vue!",
        isEdit: false,
      };
    },
    methods: {
      onEdit() {
        this.isEdit = !this.isEdit;
        nextTick(() => {
          this.$refs.input.focus();
        });
        // setTimeout(() => {
        // this.$refs.input.focus();
        // });
      },
    },
  };
</script>
