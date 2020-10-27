<template>
  <div id="app">
    <HelloWorld msg="" />
    <a-button type="primary">
      Primary
    </a-button>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

import { Button } from "ant-design-vue";
import Vue from "vue";
Vue.component(Button.name, Button);
Vue.component(Button.Group.name, Button.Group);

export default {
  name: "App",
  components: {
    HelloWorld,
  },
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
