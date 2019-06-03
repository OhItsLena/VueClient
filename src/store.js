import Vue from "vue";
import Vuex from "vuex";
import { stat } from "fs";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    uid: "",
    username: "",
    password: "",
    orderProducts: []
  },
  mutations: {
    login(state, user) {
      state.uid = user.id;
      state.username = user.name;
      state.password = user.pwd;
    },
    addProduct(state, p) {
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
    },
    rmvProduct(state, p) {
      state.orderProducts.forEach(element => {
        if ((element.pid == p.pid) & (element.quant > 1)) {
          element.quant--;
        } else if ((element.pid == p.pid) & (element.quant == 1)) {
          state.orderProducts.splice(state.orderProducts.indexOf(element), 1);
        }
      });
    },
    clear(state) {
      state.orderProducts = [];
      state.uid = "";
      state.username = "";
      state.password = "";
    }
  },
  getters: {
    cart: state => {
      return state.orderProducts.reduce((pv, cv) => pv + cv.quant, 0);
    }
  }
});
