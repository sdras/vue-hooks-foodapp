<template>
  <div class="scene -gallery">
    <div v-for="item in food" class="item" :data-key="item">
      <img :src="`${item}.jpg`" :alt="item">
    </div>

    <div class="scene -detail">
      <div class="detail">
        <img>
        <div class="content">
          <div class="title">Great Horned Owl</div>
          <div class="creator">Krystine Lopez</div>
          <div
            class="description"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure cum, est amet delectus, blanditiis voluptatem laborum pariatur consequatur quae voluptate, nisi. Laborum adipisci iste earum distinctio, fugit, quas ipsa impedit.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
      ]
    };
  },
  methods: {
    fullThing() {
      const items = document.querySelectorAll(".item");
      const detailItem = document.querySelector(".detail");
      const detailScene = document.querySelector(".scene.-detail");

      detailScene.style.display = "none";

      items.forEach(item => {
        item.addEventListener("click", () => {
          const itemImage = item.querySelector("img");

          detailItem.setAttribute("data-image", item.getAttribute("data-key"));

          detailItem
            .querySelector("img")
            .setAttribute("src", itemImage.getAttribute("src"));

          detailScene.style.display = "block";
          item.style.opacity = 0;

          let firstRect = itemImage.getBoundingClientRect();
          let lastRect = detailItem.getBoundingClientRect();

          detailItem.animate(
            [
              {
                transform: `
                  translateX(${firstRect.left - lastRect.left}px)
                  translateY(${firstRect.top - lastRect.top}px)
                  scale(${firstRect.width / lastRect.width})
                `
              },
              {
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
      });

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
    this.fullThing();
  }
};
</script>

<style lang="scss" scoped>
$app-width: 50vmin;
$app-height: 90vmin;

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

  > img {
    height: auto;
    width: 100%;
  }
}

.detail {
  color: white;
  width: $app-width;
  height: $app-height;
  transform-origin: top left;
  display: flex;
  flex-direction: column;

  > img {
    height: auto;
    width: 100%;
    height: auto;
    flex: 0 1 auto;
    z-index: 1;
  }

  > .content {
    background: #232323;
    flex: 1 0 auto;
    padding: 2rem 1.5rem;
    animation: slide-down 0.6s ease-in-out;

    @keyframes slide-down {
      from {
        transform: translateY(-100%);
      }
      to {
        transform: translateY(0);
      }
    }

    > * {
      margin-bottom: 1rem;
    }

    > .title {
      font-size: 2rem;
      text-transform: uppercase;
    }

    > .creator {
      opacity: 0.6;
      margin-top: -0.5rem;
    }

    > .description {
      line-height: 1.5;
    }
  }
}

body {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: #1d1f20;
}

html,
body {
  font-size: 14px;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  position: relative;
}
</style>