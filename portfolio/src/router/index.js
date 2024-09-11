import { createRouter, createWebHistory } from 'vue-router';
import AppHome from '../components/AppHome.vue';
import AppProjects from '../components/AppProjects.vue';
import AppContact from '../components/AppContact.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: AppHome,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: AppProjects,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: AppContact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
