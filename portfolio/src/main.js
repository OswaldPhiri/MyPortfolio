import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.config.productionTip = false

// Initialize AOS with better configuration
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  offset: 100,
  delay: 100,
  mirror: false,
  anchorPlacement: 'top-bottom'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
