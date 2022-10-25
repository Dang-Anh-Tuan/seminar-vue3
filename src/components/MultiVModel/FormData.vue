<template>
  <form>
    <input
      type="text"
      placeholder="Name ..."
      @input="handleChangeName($event.target.value)"
    />
    <input
      type="text"
      placeholder="Age ..."
      @input="handleChangeAge($event.target.value)"
    />
  </form>
</template>

<script>
export default {
  emits: ["update:name", "update:age"],

  methods: {
    handleChangeName(payload) {
      this.$emit("update:name", payload);
    },

    handleChangeAge(payload) {
      this.$emit("update:age", payload);
    },
  },
};
</script>

<style></style>
