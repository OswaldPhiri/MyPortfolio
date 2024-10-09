import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles.css';
import './assets/main.css';
import router from './router';
import '@fortawesome/fontawesome-free/css/all.min.css';


createApp(App)
  .use(router) // Use the router
  .mount('#app');


createApp(App).mount('#app')
