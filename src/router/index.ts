import { createRouter, createWebHistory } from 'vue-router';
import { Home, Login } from '@/pages';

const routes = [
  {
    path: '/:locale(pl|en)',
    children: [
      {
        path: '',
        component: Home,
        meta: {
          titleKey: 'page.home.title',
        },
      },
      {
        path: 'login',
        component: Login,
        meta: {
          titleKey: 'page.login.title',
        },
      },
    ],
  },
  {
    path: '/',
    redirect: '/pl',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
