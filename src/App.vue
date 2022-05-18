<template>
  <h1>설문조사</h1>
  <TextField v-model="fileds[0].value" :title="fileds[0].title" />
  <RadioSelector
    v-model="fileds[1].value"
    :title="fileds[1].title"
    :items="fileds[1].items"
  />

  <h1>결과</h1>
  <div v-for="filed in fileds" :key="filed.titie">
    {{ filed.value }}
  </div>
</template>

<script>
  import TextField from "@/components/TextField";
  import RadioSelector from "@/components/RadioSelector";

  export default {
    components: {
      TextField,
      RadioSelector,
    },
    data() {
      return {
        fileds: [
          { component: "TextField", title: "이름", value: "" },
          {
            component: "RadioSelector",
            title: "나이대",
            value: "",
            items: ["20대", "30대", "40대", "50대"],
          },
        ],
      };
    },
  };
</script>
