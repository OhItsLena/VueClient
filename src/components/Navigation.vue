<template>
  <nav class="navbar is-primary is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <p class="navbar-item is-size-4">
        <b>ORDER</b>APP
      </p>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbar"
        v-bind:class="{ 'is-active': showMobileMenu }"
        v-on:click="BurgerMenu()"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbar" class="navbar-menu" v-bind:class="{ 'is-active': showMobileMenu }">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item">Home</router-link>
        <router-link to="/login" class="navbar-item">Login</router-link>
        <router-link to="/about" class="navbar-item">About</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      showMobileMenu: false
    };
  },
  methods: {
    BurgerMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    }
  }
};
</script>

<style scoped>
</style>
