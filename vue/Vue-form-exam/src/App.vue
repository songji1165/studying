<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Home></Home>

    <div>
      <h3>{{title}}</h3>
      <p>{{count}}</p>
      <button @click="count ++">추가</button>
    </div>

    <Appstatus></Appstatus>

    <Modal></Modal>
  </div>
</template>

<script>
import Home from "./home.vue";
import Modal from "./components/modal1.vue";

export default {
  name: "app",
  components: {
    Home,
    Modal
  },
  data() {
    return {
      title: "버튼을 눌러주세요",
      count: 0
    };
  }
};
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
