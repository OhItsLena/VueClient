<template>
  <productlist></productlist>
</template>

<script>
import ApiService from "../ApiService";
import ProductList from "../components/ProductList";

export default {
  name: "ProductView",
  components: {
    productlist: ProductList
  }
};
</script>