<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    this.$http
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((result) => {
        console.warn(
          "This is just a test for retrieve data using axios",
          result.data
        );
      });
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
