<template>
  <div>
    <app-navigation></app-navigation>
    <main>
      <app-grid></app-grid>
    </main>
  </div>
</template>

<script>
import AppGrid from "./components/AppGrid.vue";
import AppNavigation from "./components/AppNavigation.vue";

export default {
  components: {
    AppNavigation,
    AppGrid
  }
};
</script>

<style lang="scss">
body {
  width: 100vw;
  margin: 0;
  background: #1d1f20;
  color: #d1d7da;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

main {
  display: flex;
  width: 100vw;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

#app {
  height: $app-height;
  width: $app-width;
  text-align: center;
}

h1,
h2,
h3 {
  font-family: "Prata", serif;
  color: white;
  font-weight: normal;
}

h1 {
  font-size: 40px;
}

.tags {
  padding-bottom: 10px;
  span {
    padding: 4px 15px;
    border: 1px solid;
    border-radius: 1000px;
    margin-right: 10px;
    font-size: 12px;
    background: black;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: #f1bf9d;
  }
}
</style>
