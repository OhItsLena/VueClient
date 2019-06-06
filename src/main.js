import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Buefy from "buefy";
import VeeValidate from "vee-validate";
import "buefy/dist/buefy.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import store from "./store";

library.add(faPlus);
library.add(faMinus);
library.add(faShoppingCart);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.filter("toCurrency", function(value) {
  if (typeof value !== "number") {
    return value;
  }
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2
  });
  return formatter.format(value);
});

Vue.config.productionTip = false;

Vue.use(Buefy);
Vue.use(VeeValidate);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

document.title = "OrderApp - Place an order";
