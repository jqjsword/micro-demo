<template>
  <div class="container">
    <div class="main-menu-wrapper">
      <main-menu></main-menu>
    </div>
    <div class="frame-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
watch(
  () => route.name,
  (value) => {
    console.log("value :>> ", value);
  }
);
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

.container {
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
}

.frame-wrapper {
  flex: auto;
}
</style>
