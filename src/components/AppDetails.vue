<template>
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
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$app-width: 600px;
$app-height: 100vh;

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
</style>