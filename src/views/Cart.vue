<template>
  <section class="section">
    <h2 class="level-item subtitle is-4">Your order:</h2>
    <cartlist></cartlist>
  </section>
</template>

<script>
import CartList from "../components/CartList";

export default {
  name: "CartView",
  components: {
    cartlist: CartList
  }
};
</script>