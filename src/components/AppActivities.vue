<template>
  <aside>
    <h2>Activities</h2>
    <div v-for="activity in activities" :key="activity.title">
      <h4>{{ activity.title }}</h4>
      <small>{{ activity.date }}</small>
      <img :src="activity.profile" :alt="`the author of ${activity.title}`">
      <p>{{ activity.post }}</p>
    </div>
  </aside>
</template>

<script>
export default {
  computed: {
    activities() {
      return this.$store.state.activities;
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  border-bottom: 1px solid $app-border;
  padding: 30px 0 20px;
}

h4 {
  text-transform: uppercase;
  font-weight: normal;
  letter-spacing: 0.15em;
  margin-bottom: 3px;
  font-size: 18px;
  color: white;
}

aside {
  padding: 35px 12vmin 0 6vmin;
}

img {
  float: right;
  width: 50px;
  height: auto;
  padding: 3px;
  border-radius: 1000px;
  border: 2px solid #bc4b17;
}

small {
  color: $app-highlight;
  font-style: italic;
}
</style>