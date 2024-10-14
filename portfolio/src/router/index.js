import { createRouter, createWebHistory } from 'vue-router';
import AppHome from '../components/AppHome.vue';
import AppProjects from '../components/AppProjects.vue';
import AppAbout from '../components/AppAbout.vue';
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
      path: '/about',
      name: 'about',
      component: AppAbout,
  },
    {
        path: '/contact',
        name: 'Contact',
        component: AppContact,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;