<template>
  <div id="app">
    <app-grid></app-grid>
  </div>
</template>

<script>
import AppGrid from "./components/AppGrid.vue";

export default {
  components: {
    AppGrid
  }
};
</script>

<style lang="scss">
$app-width: 600px;
$app-height: 100vh;

body {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100vw;
  background: #1d1f20;
}

#app {
  height: $app-height;
  width: $app-width;
  overflow: hidden;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
