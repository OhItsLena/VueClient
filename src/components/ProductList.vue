<template>
  <section class="section">
    <div class="level">
      <div class="level-left">
        <h2 class="level-item subtitle is-4">Choose from the menu:</h2>
      </div>
      <div class="level-right">
        <a class="level-item is-size-4" @click="Cart()">
          <strong>
            <font-awesome-icon icon="shopping-cart"/>
            Cart {{ cart }}
          </strong>
        </a>
      </div>
    </div>
    <b-table :data="products" :mobile-cards="false">
      <template slot-scope="props">
        <b-table-column field="food_drink" label="Food/Drink">{{ props.row.food_drink }}</b-table-column>
        <b-table-column field="price" label="Price">{{ props.row.price | toCurrency }}</b-table-column>
        <b-table-column field="add" label="Add" class="has-text-right">
          <button class="button is-small is-success is-rounded" @click="Add(props.row)">
            <font-awesome-icon icon="plus"/>
          </button>
        </b-table-column>
      </template>
    </b-table>
    <b-loading :is-full-page="true" :active.sync="isLoading" :can-cancel="true"></b-loading>
  </section>
</template>

<script>
import ApiService from "../ApiService";

export default {
  name: "ProductList",
  data() {
    return {
      orderId: "",
      orderProducts: [],
      cart: 0,
      products: [],
      error: "",
      isLoading: false
    };
  },
  async created() {
    try {
      this.isLoading = true;
      this.products = await ApiService.getProducts();
      this.orderId = this.$route.params.id;
      this.isLoading = false;
      this.cart = this.$store.getters.cart;
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {
    CheckQuantity(product) {
      let existing = false;
      this.orderProducts.forEach(element => {
        if (element.pid == product.id) {
          existing = true;
          element.quant += 1;
          console.log("existing");
        }
      });
      if (!existing) {
        this.orderProducts.push({ pid: product.id, quant: 1 });
      }
    },
    async Add(product) {
      try {
        this.$notification.open(product.food_drink + " added to cart!");
        this.$store.commit("addProduct", product);
        this.cart = this.$store.getters.cart;
        this.CheckQuantity(product);
        await ApiService.updateOrder(this.orderProducts, this.orderId);
      } catch (error) {
        console.log(error);
      }
    },
    Cart() {
      this.$router.push({ path: `/cart/${this.orderId}` });
    }
  }
};
</script>

<style scoped>
</style>
