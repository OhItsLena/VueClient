<template>
  <div class="home">
    <h1 class="title">Discover the ORDERAPP!</h1>
    <img alt="Food Order App Icon" src="../assets/smartphone.png">
    <h2 class="subtitle is-4">
      1. Visit the
      <router-link to="/login">Login-Page</router-link>
    </h2>
    <h2 class="subtitle is-4">2. Start your order</h2>
    <h2 class="subtitle is-4">3. Enjoy your meal</h2>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>
<style scoped>
img {
  height: 15em;
  width: auto;
}
</style>
