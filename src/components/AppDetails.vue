<template>
  <div class="scene -detail" ref="details" :style="{ top: (topImg + 500) + 'px' }">
    <div class="detail">
      <div class="content">
        <h2 class="title" ref="title">{{ currentItem.restaurant }}</h2>
        <div class="tags">
          <span v-for="tag in currentItem.tags" :key="tag">{{ tag }}</span>
        </div>
        <p class="description" ref="desc">{{ currentItem.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { preventscroll } from "./../hooks/preventscroll.js";
import { enablescroll } from "./../hooks/enablescroll.js";
import { TimelineMax, TweenMax, Sine, Elastic } from "gsap";
import Splitting from "splitting";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";

export default {
  props: {
    currentItem: {
      type: Object,
      required: true
    },
    topImg: {
      type: Number,
      required: true
    }
  },
  hooks() {
    preventscroll();
    enablescroll();
  },
  methods: {
    fadeIn() {
      TweenMax.fromTo(
        this.$refs.details,
        0.3,
        {
          opacity: 0
        },
        {
          opacity: 1
        }
      );
    },
    lettering() {
      const title = this.$refs.title;
      const desc = this.$refs.desc;

      Splitting({ target: title, by: "chars" });
      Splitting({ target: desc, by: "lines" });
      const tl = new TimelineMax();

      tl.add("start");
      tl.staggerFromTo(
        ".char",
        3.5,
        {
          opacity: 0,
          transformOrigin: "50% 50% -30px",
          rotationY: 100
        },
        {
          opacity: 1,
          transformOrigin: "50% 50% 0",
          rotationY: 0,
          ease: Elastic.easeOut.config(1, 0.4)
        },
        0.02,
        "start+=0.3"
      );
      tl.staggerFromTo(
        desc.childNodes,
        1.5,
        {
          opacity: 0
        },
        {
          opacity: 1,
          ease: Sine.easeOut
        },
        0.008,
        "start+=0.6"
      );
    }
  },
  mounted() {
    this.fadeIn();
    this.lettering();
  }
};
</script>

<style lang="scss">
.scene.-detail {
  position: absolute;
}

.detail {
  color: white;
  width: $app-width;
  height: $app-height;
  transform-origin: top left;
  display: flex;
  flex-direction: column;

  .content {
    background: #1d1f20;
    flex: 1 0 auto;
    padding: 2rem 1.5rem;

    * {
      margin-bottom: 1rem;
    }

    .title {
      font-size: 2rem;
      margin-top: 0;
      text-transform: uppercase;
      span {
        perspective: 500;
        perspective-origin: 50% 50%;
        transform-style: preserve-3d;
      }
    }

    .word,
    .char {
      margin-bottom: 0;
    }

    .creator {
      opacity: 0.6;
      margin-top: -0.5rem;
    }

    .description {
      line-height: 1.5;
    }
  }
}
</style>