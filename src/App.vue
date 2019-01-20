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
$app-width: 50vmin;
$app-height: 90vmin;

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
