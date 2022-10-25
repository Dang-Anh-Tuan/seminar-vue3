<template>
  <Box
    v-for="(color, index) in colorsBox"
    :color="color"
    :content="index"
    :key="index"
  />
</template>

<script>
import Box from "./Box.vue";

export default {
  data() {
    return {
      colorsBox: ["#571845", "#900c3e", "#c70039"],
    };
  },
  components: { Box },
};
</script>

<style></style>
