<template>
  <Student> </Student>
</template>
<script>
import Student from "@/components/Composition/Student";
export default {
  name: "CompositionAPI",
  components: { Student },

  setup() {
    console.log("setup");
  },
};
</script>
