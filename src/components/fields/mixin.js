export default {
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
  emits: ["update:modelValue"],
};
