<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <VuexGetters />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import VuexDemo from "./page/day1/VuexDemo";
// import VuexStore from "./page/day2/VuexStore";
// import VuexMutation from "./page/day3/VuexMutation";
import VuexGetters from "./page/day4/VuexGetters";
export default {
  name: "App",
  components: {
    // HelloWorld,
    // VuexDemo,
    // VuexStore,
    // VuexMutation,
    VuexGetters
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
