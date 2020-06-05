<template>
  <nav class="c-nav">
    <router-link to="/">
      <md-menu md-direction="bottom-start">
        <md-button class="md-raised" md-menu-trigger>Home</md-button>
      </md-menu>
    </router-link>
    <router-link to="/calculator">
      <md-menu md-direction="bottom-end">
        <md-button class="md-raised" md-menu-trigger
          >Fibonacci calculator</md-button
        >
      </md-menu>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "NavigatorComponent",
};
</script>
