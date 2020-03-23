<template>
  <div>
    <div>通过计算属性从store中获取的值 {{ count }}</div>
    <div>
      <button @click="addInfo(10)">+</button>
      <button @click="reduceInfo()">-</button>
    </div>
    <div>通过计算属性从store中获取的值 {{ test }}</div>
    <div>
      <button @click="useConstant('mutation-type这么用')">使用常量</button>
    </div>
    <div>
      <button @click="addAction(3)">action+</button>
      <button @click="reduceAction()">action-</button>
    </div>
    <div>普通计算属性的使用{{ doMessage }}</div>
    <div>通过getters获取store中的计算属性结果{{ getTodoById(1) }}</div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
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
    },
    ...mapGetters(["getTodoById"])
  },
  methods: {
    ...mapMutations({
      addInfo: "add",
      reduceInfo: "reduce",
      useConstant: "UPDATE_COUNT"
    }),
    ...mapActions({
      addAction: "addAction",
      reduceAction: "reduceAction"
    })
  }
};
</script>
