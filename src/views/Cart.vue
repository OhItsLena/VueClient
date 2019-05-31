<template>
  <section class="section">
    <h2 class="level-item subtitle is-4">Your order:</h2>
    <b-table :data="products" :mobile-cards="false">
      <template slot-scope="props">
        <b-table-column field="quantity" label="Quantity">{{ props.row.quant }} x</b-table-column>
        <b-table-column field="food_drink" label="Food/Drink">{{ props.row.food_drink }}</b-table-column>
        <b-table-column field="price" label="Price">$ {{ props.row.price }}</b-table-column>
      </template>
    </b-table>
    <hr>
    <div class="level is-mobile">
      <div class="level-left">
        <p class="is-size-4">Total:</p>
      </div>
      <div class="level-right">
        <p class="is-size-4">$ {{ total }}</p>
      </div>
    </div>
    <b-button
      class="is-rounded is-primary is-large is-fullwidth"
      @click="complete()"
      style="margin-top: 10%"
    >Complete Order</b-button>
    <b-button
      class="is-rounded is-light is-large is-fullwidth"
      @click="cancle()"
      style="margin-top: 10px"
    >Cancle Order</b-button>
  </section>
</template>

<script>
import ApiService from "../ApiService";

export default {
  data() {
    return {
      orderId: "",
      orderProducts: "",
      products: [],
      total: 0
    };
  },
  async created() {
    try {
      this.orderId = this.$route.params.id;
      //this.orderProducts = await ApiService.getOrderProducts(this.orderId);
      this.products = this.$store.state.orderProducts;
      //   for (let p of this.orderProducts) {
      //     let product = await ApiService.getProduct(p.pid);
      //     product.quant = p.quant;
      //     this.products.push(product);
      //   }
      for (let p of this.products) {
        this.total += p.quant * p.price;
      }
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    complete() {
      this.$notification.open("Order completed! :)");
      this.$router.push("/login");
    },
    async cancle() {
      try {
        console.log(await ApiService.deleteOrder(this.orderId));
        this.$notification.open("Order canceled! :(");
        this.$router.push("/login");
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>