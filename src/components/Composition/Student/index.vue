<template>
  <div>
    <from-create> </from-create>
    <!-- <list-component :data="students"> </list-component> -->
  </div>
</template>
<script>
// import ListComponent from "../ListComponent.vue";
import FromCreate from "./FromCreate.vue";

export default {
  components: {  FromCreate },
  name: "StudentComponent",

  data() {
    return {
      students: [
        {
          name: "Tuan",
          age: 18,
        },
      ],
    };
  },
};
</script>
