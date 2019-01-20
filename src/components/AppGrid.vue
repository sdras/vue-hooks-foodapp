<template>
  <div class="scene -gallery" ref="gallery">
    <div
      @click="expand(item, $event)"
      v-for="item in food"
      class="item"
      :key="item"
      :data-key="item"
      ref="itemimg"
    >
      <img :src="`${item}.jpg`" :alt="item" :ref="item">
    </div>
    <app-details v-if="isShowing"></app-details>
  </div>
</template>

<script>
import AppDetails from "./AppDetails.vue";
import { TimelineMax, Power2 } from "gsap";

export default {
  components: {
    AppDetails
  },
  data() {
    return {
      isShowing: false,
      food: [
        "appetizer",
        "avocado",
        "berries",
        "bowl",
        "breakfast",
        "burger2",
        "corn",
        "dumpling",
        "egg",
        "egg2",
        "fig",
        "fries",
        "oyster",
        "pancake",
        "pasta",
        "pasta2",
        "pizza",
        "plates",
        "popcicle",
        "salmon",
        "soup",
        "steak",
        "steamed",
        "toast",
        "tomato"
      ],
      rects: {
        first: null,
        last: null
      }
    };
  },
  methods: {
    expand(item, event) {
      const itemEl = event.target;

      this.rects.first = itemEl.getBoundingClientRect();
      this.rects.last = this.$refs.gallery.getBoundingClientRect();

      let elImg = this.$refs[item][0];

      if (!this.isShowing) {
        console.log("in");
        const itemEl = event.target;
        this.isShowing = true;

        let deltaW = this.rects.first.left - this.rects.last.left;
        let deltaH = this.rects.first.top - this.rects.last.top;
        let deltaS = this.rects.last.width / this.rects.first.width;

        TweenMax.to(elImg, 0.5, {
          x: -deltaW,
          y: -deltaH,
          scale: deltaS,
          transformOrigin: "0 0",
          zIndex: 1000,
          ease: Power2.easeOut
        });
      } else {
        TweenMax.to(elImg, 0.5, {
          x: this.rects.first.left,
          y: this.rects.first.top,
          scale: 1,
          transformOrigin: "0 0",
          zIndex: 1,
          ease: Power2.easeIn
        });

        this.isShowing = false;
      }
    },
    fullThing() {
      const items = document.querySelectorAll(".item");
      const detailItem = document.querySelector(".detail");
      const detailScene = document.querySelector(".scene.-detail");

      detailScene.style.display = "none";

      detailItem.addEventListener("click", () => {
        const itemImage = document.querySelector(
          `[data-key="${detailItem.getAttribute("data-image")}"]`
        );

        let itemImageRect = itemImage.getBoundingClientRect();
        let detailItemRect = detailItem.getBoundingClientRect();

        detailScene.style.display = "none";
        itemImage.style.opacity = 1;

        itemImage.animate(
          [
            {
              zIndex: 2,
              transform: `
                translateX(${detailItemRect.left - itemImageRect.left}px)
                translateY(${detailItemRect.top - itemImageRect.top}px)
                scale(${detailItemRect.width / itemImageRect.width})
                `
            },
            {
              zIndex: 2,
              transform: `
                translateX(0)
                translateY(0)
                scale(1)
              `
            }
          ],
          {
            duration: 600,
            easing: "cubic-bezier(0.2, 0, 0.2, 1)"
          }
        );
      });
    }
  },
  mounted() {
    //this.fullThing();
  }
};
</script>

<style lang="scss">
$app-width: 700px;
$app-height: 100vh;

.scene {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: $app-width;
  height: $app-height;
  max-height: 100%;
  overflow-y: scroll;

  &.-gallery {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;

    > .item {
      flex-basis: 30%;
      flex-grow: 0;
      flex-shrink: 0;
      height: auto;
      min-height: $app-width / 3;
      // overflow: hidden;
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
  }
}
</style>