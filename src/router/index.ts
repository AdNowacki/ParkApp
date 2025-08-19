import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home/Home.vue';
import Login from '@/pages/Login/Login.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
