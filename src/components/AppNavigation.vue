<template>
  <nav>
    <app-logo></app-logo>
    <span class="title">Dinner's On Me</span>
    <span class="login">Log In</span>
  </nav>
</template>

<script>
import AppLogo from "./AppLogo.vue";

export default {
  components: {
    AppLogo
  }
};
</script>

<style lang="scss" scoped>
nav {
  height: 80px;
  background: #0f1010;
  margin-bottom: 30px;
  padding: 0 30px;
  display: flex;
  position: relative;
}

.title {
  text-transform: uppercase;
  letter-spacing: 0.18em;
  margin: 28px 20px;
  font-size: 18px;
}

.login {
  position: absolute;
  right: 30px;
  margin: 20px 20px;
  border: 1px solid currentColor;
  padding: 8px 30px;
  border-radius: 1000px;
  transition: 0.3s all ease;
  cursor: pointer;
  background: black;
  &:hover {
    background: rgb(87, 16, 16);
    transition: 0.3s all ease;
  }
}
</style>