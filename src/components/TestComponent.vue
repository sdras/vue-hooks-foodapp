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
export default {
  data() {
    return (
      {
        name: "Panda Express",
        url: "potstickers.jpg",
        desc:
          "Bacon ipsum dolor amet ball tip pancetta andouille pork loin chuck ham swine tongue pastrami cow ham hock drumstick bacon. Short ribs fatback tenderloin, andouille pastrami ball tip buffalo bresaola jerky t-bone spare ribs cupim.",
        tags: ["chinese", "dumplings", "meat"]
      },
      {
        name: "Blithe Cafe",
        url: "eggs.jpg",
        desc:
          "Kielbasa strip steak buffalo kevin drumstick bacon. Shank spare ribs venison cupim. Beef ground round t-bone flank cow porchetta, ball tip filet mignon meatball drumstick sirloin pancetta fatback. Tenderloin drumstick pork chop picanha ball tip.",
        tags: ["eggs", "cafes", "takeout", "brunch"]
      }
    );
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