<template>
  <form  @submit.prevent="createStudent">
    <input type="text" placeholder="Name ..." v-model="name">
    <input type="text" placeholder="Age ..." v-model="age">
    <button type="submit">Create</button>
  </form>  
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const name = ref('')
    const age = ref(0)

    return {
      name,
      age
    }
  },

  methods : {
    createStudent() {
      console.log(this.name);
      console.log(this.age);

    }
  }
}
</script>

<style>

</style>