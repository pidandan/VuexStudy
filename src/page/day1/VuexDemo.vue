<template>
  <div>
    <h2>{{ message }}</h2>
    <hr />
    <h3>{{ $store.state.count }}</h3>
    <p>
      <button @click="$store.commit('add')">+</button>
      <button @click="$store.commit('reduce')">-</button>
    </p>
  </div>
</template>
<script>
import store from "@/vuex/store";
export default {
  name: "VuexDemo",
  data() {
    return {
      message: "Hello Vuex"
    };
  },
  store
};
</script>
