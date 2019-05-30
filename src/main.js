import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import VeeValidate from 'vee-validate'
import 'buefy/dist/buefy.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlus)
library.add(faShoppingCart)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(Buefy);
Vue.use(VeeValidate);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
