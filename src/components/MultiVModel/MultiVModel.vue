<template>
  <div>
    <form-data v-model:name="name" v-model:age="age"></form-data>
    <h1>Info</h1>
    <p>Name :</p>
    <p>{{ name }}</p>
    <p>Age :</p>
    <p>{{ age }}</p>
  </div>
</template>

<script>
import FormData from "./FormData.vue";
export default {
  components: { FormData },
  data() {
    return {
      name: "",
      age: 0,
    };
  },
};
</script>

<style></style>
