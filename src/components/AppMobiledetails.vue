<template>
  <div
    class="mobiledetails"
    :style="`background: url('${currentItem.name}.jpg') no-repeat left top; background-size: contain`"
  >
    <div class="mobilecontent">
      <h2 class="title" ref="name">{{ currentItem.restaurant }}</h2>
      <div class="tags">
        <span v-for="tag in currentItem.tags" :key="tag">{{ tag }}</span>
      </div>
      <p class="description" ref="description">{{ currentItem.desc }}</p>
      <button @click="closeModal">Back to Results</button>
    </div>
  </div>
</template>

<script>
import { TimelineMax, TweenMax, Sine, Elastic } from "gsap";
import Splitting from "splitting";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";

export default {
  props: {
    currentItem: {
      type: Object,
      required: true
    }
  },
  methods: {
    closeModal() {
      this.$emit("closeModal", false);
    },
    lettering() {
      const title = this.$refs.name;
      const desc = this.$refs.description;

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
        "start+=0.2"
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
        "start+=0.5"
      );
    },
    fadeIn() {
      TweenMax.fromTo(
        ".mobiledetails",
        0.3,
        {
          opacity: 0
        },
        {
          opacity: 1,
          transformOrigin: "50% 50%",
          ease: Sine.easeOut
        }
      );
    }
  },
  mounted() {
    this.lettering();
    this.fadeIn();
  }
};
</script>

<style lang="scss" scoped>
.mobiledetails {
  position: fixed;
  z-index: 1000000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: calc(100% - 120px);
  width: calc(100vw - 80px);
  padding: 120px 40px 0;
  overflow: hidden;
  background: $app-background;
  background-size: 500px;
  &:before {
    content: "";
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: -moz-linear-gradient(
      top,
      rgba(220, 66, 37, 0) 0%,
      rgba(213, 65, 37, 0) 1%,
      rgba(97, 44, 34, 0.63) 18%,
      rgba(29, 31, 32, 0.82) 28%,
      rgba(29, 31, 32, 1) 37%,
      rgba(29, 31, 32, 1) 100%
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
      top,
      rgba(220, 66, 37, 0) 0%,
      rgba(213, 65, 37, 0) 1%,
      rgba(97, 44, 34, 0.63) 18%,
      rgba(29, 31, 32, 0.82) 28%,
      rgba(29, 31, 32, 1) 37%,
      rgba(29, 31, 32, 1) 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
      to bottom,
      rgba(220, 66, 37, 0) 0%,
      rgba(213, 65, 37, 0) 1%,
      rgba(97, 44, 34, 0.63) 18%,
      rgba(29, 31, 32, 0.82) 28%,
      rgba(29, 31, 32, 1) 37%,
      rgba(29, 31, 32, 1) 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00dc4225', endColorstr='#1d1f20',GradientType=0 ); /* IE6-9 */
  }
}

.mobilecontent {
  position: relative;
  z-index: 10000000;
}

.tags {
  margin-top: 15px;
}

button {
  padding: 8px 20px;
  border: none;
  font-weight: bold;
  border-radius: 1000px;
  margin-right: 10px;
  font-size: 14px;
  color: black;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  background: $app-highlight;
  cursor: pointer;
}
</style>