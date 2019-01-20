<template>
  <section>
    <div v-for="item in data" :key="item.name">
      <h3>{{ item.name }}</h3>
      <div class="tags">
        <span v-for="tag in item.tags" :key="tag">{{ tag }}</span>
      </div>
      <p>{{ item.desc }}</p>
      <img :src="item.url" :alt="item.name" width="100%">
    </div>
  </section>
</template>

<script>
import { foo } from "./../hooks/initchart.js";

export default {
  hooks() {
    return foo();
  }
};
</script>

<style scoped>
h3 {
  margin-bottom: 0;
}

img {
  border-radius: 4px;
  box-shadow: 1px 2px 5px 0 #151e31;
}

.tags span {
  font-family: "Tauri", sans-serif;
  padding: 4px 10px;
  border: 1px solid;
  border-radius: 1000px;
  margin-right: 10px;
  font-size: 12px;
}
</style>