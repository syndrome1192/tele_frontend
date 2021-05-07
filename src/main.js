import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import Vuelidate from 'vuelidate'
import 'bootstrap/dist/js/bootstrap'
import Paginate from 'vuejs-paginate'

Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.component('Paginate', Paginate)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
