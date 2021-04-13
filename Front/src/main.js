// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import VueAxios from 'vue-axios'
import Axios from 'axios'
import vueRouter from 'vue-router'
import VueResizeText from 'vue-resize-text'
import router from './router'

import { sync } from 'vuex-router-sync'
import store from '@/store/store'
sync(store, router)


// import '@fortawesome/fontawesome-free/css/all.css'
// import '@fortawesome/fontawesome-free/js/all.js'

Vue.use(vueRouter)
Vue.use(VueResizeText)
Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use( VueAxios, Axios );

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  render: h => h(App),
  beforeCreate() {
    console.log(this.$store.state.isUserLoggedIn)
    if (!this.$store.state.isUserLoggedIn) {
      this.$router.push('/')
    }
  }
}).$mount('#app')
