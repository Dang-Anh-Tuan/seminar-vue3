<template>
  <table v-if="data.length > 0">
    <tr>
      <th v-for="(value, key, index) in data[0]" :key="index" width="300">
        {{ key }}
      </th>
    </tr>
    <tr v-for="(object, index) in data" :key="index">
      <td v-for="(value, key, index) in object" :key="index">
        {{ value }}
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  props: {
    data: Array,
  },
};
</script>

<style>
table{
  text-align: center;
}
</style>
