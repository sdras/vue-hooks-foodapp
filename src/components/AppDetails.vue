<template>
  <div class="scene -detail">
    <div class="detail">
      <div class="content">
        <h2 class="title">{{ currentItem.restaurant }}</h2>
        <div class="tags">
          <span v-for="tag in currentItem.tags" :key="tag">{{ tag }}</span>
        </div>
        <p class="description">{{ currentItem.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { preventscroll } from "./../hooks/preventscroll.js";
import { enablescroll } from "./../hooks/enablescroll.js";

export default {
  props: {
    currentItem: {
      type: Object,
      required: true
    }
  },
  hooks() {
    preventscroll();
    enablescroll();
  },
  mounted() {
    TweenMax.fromTo(
      ".-detail",
      0.3,
      {
        opacity: 0
      },
      {
        opacity: 1
      }
    );
  }
};
</script>

<style lang="scss" scoped>
.scene.-detail {
  position: absolute;
  top: 500px;
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