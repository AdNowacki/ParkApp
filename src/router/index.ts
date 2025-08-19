import { createRouter, createWebHistory } from 'vue-router';
import { Home, Login } from '@/pages';

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
