import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: "",
    password: "",
    orderProducts: []
  },
  mutations: {
    login(state, user) {
      state.username = user.name;
      state.password = user.pwd;
    },
    updateProducts(state, p) {
      let existing = false;
      state.orderProducts.forEach(element => {
        if (element.pid == p.id) {
          existing = true;
          element.quant++;
        }
      });
      if (!existing) {
        state.orderProducts.push({
          pid: p.id,
          food_drink: p.food_drink,
          price: p.price,
          quant: 1
        });
      }
    }
  },
  actions: {}
});
