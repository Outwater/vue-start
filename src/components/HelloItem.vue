<template>
  <div>
    <label>
      <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
      <input :value="name" @input="$emit('update:name', $event.target.value)" />
    </label>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "익명",
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped lang="scss">
$color: red;
h1 {
  color: $color;
}
</style>
