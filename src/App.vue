<template>
  <div>
    <app-navigation></app-navigation>
    <main>
      <app-activities></app-activities>
      <app-grid></app-grid>
      <app-about></app-about>
    </main>
  </div>
</template>

<script>
import AppGrid from "./components/AppGrid.vue";
import AppAbout from "./components/AppAbout.vue";
import AppActivities from "./components/AppActivities.vue";
import AppNavigation from "./components/AppNavigation.vue";

export default {
  components: {
    AppNavigation,
    AppActivities,
    AppAbout,
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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100vw;
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

h2 {
  margin: 0;
  font-size: 30px;
  opacity: 0.9;
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
    color: $app-highlight;
  }
}

@media only screen and (min-width: 768px) {
  #app {
    padding-right: 30px;
  }
}

// tabletish
@media only screen and (max-width: 1200px) and (min-width: 768px) {
  main {
    grid-template-columns: 1fr 1fr !important;
    width: 95vw;
    overflow: visible;
  }

  .about {
    display: none;
  }
}

// mobile
@media only screen and (max-width: 767px) {
  main {
    display: flex !important;
    flex-flow: row wrap;
  }

  #app {
    order: -1;
    height: auto !important;
    width: 90% !important;
    margin: 0 5% !important;
  }
}
</style>
