<template>
  <div>
    <div>通过计算属性从store中获取的值 {{ count }}</div>
    <div>通过计算属性从store中获取的值 {{ test }}</div>
    <div>普通计算属性的使用{{ doMessage }}</div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "VuexStore",
  data() {
    return {
      message: "Hello"
    };
  },
  computed: {
    ...mapState(["count", "test"]),
    doMessage: function() {
      return this.message + "世界";
    }
  }
};
</script>
