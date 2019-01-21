<template>
  <div class="scene -detail" ref="details" :style="{ top: topAmt + 'px' }">
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
    rects: {
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
  },
  methods: {
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
    },
    fadeIn() {
      TweenMax.fromTo(
        ".-detail",
        0.3,
        {
          opacity: 0
        },
        {
          opacity: 1,
          ease: Sine.easeOut
        }
      );
    }
  },
  computed: {
    topAmt() {
      if (window.matchMedia("(min-width: 768px)").matches) {
        //tablet + above
        return this.topImg + 500;
      } else {
        //mobile
        //compensate for the top nav and adjusting the image
        const topMargin = this.rects.last.top > 0 ? 0 : 110;
        return window.pageYOffset - topMargin + this.rects.last.width - 280;
      }
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
  max-height: 1000px;
  overflow-y: auto !important;
  z-index: 10000;
}

.detail {
  color: white;
  width: $app-width;
  height: $app-height;
  transform-origin: top left;
  display: flex;
  flex-direction: column;

  .content {
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

@media only screen and (min-width: 768px) {
  .scene {
    overflow-y: scroll;
  }
  .content {
    background: #1d1f20;
  }
}

@media only screen and (max-width: 767px) {
  .scene {
    left: 0 !important;
    width: 90vw !important;
    height: 100vh !important;
  }

  .detail .content {
    padding-top: 45px !important;
  }

  .content {
    background: -moz-linear-gradient(
      top,
      rgba(29, 31, 32, 0) 0%,
      rgba(29, 31, 32, 0) 1%,
      rgba(29, 31, 32, 0.63) 6%,
      rgba(29, 31, 32, 1) 12%,
      rgba(29, 31, 32, 1) 100%
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
      top,
      rgba(29, 31, 32, 0) 0%,
      rgba(29, 31, 32, 0) 1%,
      rgba(29, 31, 32, 0.63) 6%,
      rgba(29, 31, 32, 1) 12%,
      rgba(29, 31, 32, 1) 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
      to bottom,
      rgba(29, 31, 32, 0) 0%,
      rgba(29, 31, 32, 0) 1%,
      rgba(29, 31, 32, 0.63) 6%,
      rgba(29, 31, 32, 1) 12%,
      rgba(29, 31, 32, 1) 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#001d1f20', endColorstr='#1d1f20',GradientType=0 ); /* IE6-9 */
  }
}
</style>