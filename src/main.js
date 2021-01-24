import Vue from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'aos/dist/aos.css' // If ypu need load compiled AOS css here in plugin
import VueTypedJs from 'vue-typed-js'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueTypedJs);
Vue.config.productionTip = false;
AOS.init();
new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
