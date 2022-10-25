<template>
  <div>
    <list-component :data="students">

    </list-component>
  </div>
</template>
<script>
import ListComponent from '../ListComponent.vue';
export default {
  components: { ListComponent },
  name: "StudentComponent",

  data() {
    return {
      students : [
        {
          name : "Tuan",
          age : 18
        }
      ]
    }
  },
 
};
</script>