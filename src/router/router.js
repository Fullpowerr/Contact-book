import { createRouter, createWebHistory } from 'vue-router';
import v_main from '../components/pages/main.vue';
import contact_data from '../components/pages/сontact_data.vue';
import About from '../components/pages/About.vue';
const routes = [
   {
      path: '/',
      name: 'v_main',
      component: v_main,
   },
   {
      path: '/contact/:id',
      name: 'contact_data',
      component: contact_data,
   },
   {
      path: '/about',
      name: 'about',
      component: About,
   },
];

const router = createRouter({
   routes,
   history: createWebHistory(),
});

export default router;
