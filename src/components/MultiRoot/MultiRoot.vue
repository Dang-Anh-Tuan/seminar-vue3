<template>
  <div>
    <list-box> </list-box>
  </div>
  <div class="flex">
    <list-box> </list-box>
  </div>
</template>

<script>
import ListBox from "@/components/MultiRoot/ListBox.vue";

export default {
  name: "MultiRoot",
  components: {
    ListBox,
  },
};
</script>

<style>
.flex {
  display: flex;
}
</style>
