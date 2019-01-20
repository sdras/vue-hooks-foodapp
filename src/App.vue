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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;
}
</style>
