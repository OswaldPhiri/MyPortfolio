import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.config.productionTip = false

// Initialize AOS
AOS.init({
  duration: 800,
  once: true,
  offset: 100
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
