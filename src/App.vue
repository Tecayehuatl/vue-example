<template>
  <div id="app">
    <NavigatorComponent />
    <div class="o-main">
      <router-view></router-view>
    </div>
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
