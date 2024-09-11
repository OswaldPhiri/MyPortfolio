import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles.css';
import './assets/main.css';
import router from './router'; // Import the router

createApp(App)
  .use(router) // Use the router
  .mount('#app');


createApp(App).mount('#app')
