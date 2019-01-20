<template>
  <div class="scene -gallery" ref="gallery" id="app">
    <h1>Restaurants In Your Area</h1>
    <div
      @click="expand(item, $event)"
      v-for="item in food"
      class="item"
      :key="item.name"
      :data-key="item.name"
      ref="itemimg"
    >
      <img :src="`${item.name}.jpg`" :alt="item.name" :ref="item.name">
      <h4>{{ item.restaurant }}</h4>
    </div>
    <app-details v-if="isShowing" :currentItem="currentItem" :topImg="topImg"></app-details>
  </div>
</template>

<script>
import AppDetails from "./AppDetails.vue";
import { TimelineMax, Sine } from "gsap";

export default {
  components: {
    AppDetails
  },
  data() {
    return {
      isShowing: false,
      currentItem: null,
      rects: {
        first: null,
        last: null
      },
      topImg: 0
    };
  },
  computed: {
    food() {
      return this.$store.state.food;
    }
  },
  methods: {
    expand(item, event) {
      const itemEl = event.target;
      const elImg = this.$refs[item.name][0];

      this.rects.first = itemEl.getBoundingClientRect();
      this.rects.last = this.$refs.gallery.getBoundingClientRect();

      if (!this.isShowing) {
        this.isShowing = true;
        this.currentItem = item;
        console.log(this.rects.last);
        this.topImg = this.$refs.gallery.scrollTop;

        let deltaW = this.rects.first.left - this.rects.last.left;
        let deltaH = this.rects.first.top - this.rects.last.top;
        let deltaS = this.rects.last.width / this.rects.first.width;

        TweenMax.to(elImg, 0.3, {
          x: -deltaW,
          y: -deltaH,
          scale: deltaS,
          transformOrigin: "0 0",
          zIndex: 1000,
          ease: Sine.easeOut
        });
      } else {
        TweenMax.to(elImg, 0.3, {
          x: 0,
          y: 0,
          scale: 1,
          transformOrigin: "0 0",
          zIndex: 0,
          ease: Sine.easeIn
        });

        this.isShowing = false;
        this.currentItem = null;
      }
    }
  }
};
</script>

<style lang="scss">
.scene {
  display: flex;
  position: relative;
  top: 0;
  left: 0;
  width: $app-width;
  height: $app-height;
  max-height: 100%;
  overflow-y: scroll;

  &.-gallery {
    position: relative;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;

    > .item {
      flex-basis: 30%;
      flex-grow: 0;
      flex-shrink: 0;
      height: auto;
      min-height: $app-width / 3;
    }
  }
}

.item {
  transform-origin: top left;
  cursor: pointer;
  position: relative;
  transform-origin: 0 0;

  > img {
    height: auto;
    width: 100%;
    position: relative;
    backface-visibility: hidden;
  }
}

h4 {
  margin: 8px 0 30px;
}

h1 {
  text-align: center;
  width: 100%;
}
</style>