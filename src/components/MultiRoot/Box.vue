<template>
  <div ref="box" class="box">
    {{content}}
  </div>  
</template>

<script>
export default {
  name : 'BoxComponent',
  props : {
    color : String,
    content : Number
  },

  mounted() {
    this.$refs.box.style.backgroundColor = this.color
  },
}
</script>

<style>
.box {
  width: 50px;
  height: 50px;
  border-radius: 4px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: white;
}
</style>