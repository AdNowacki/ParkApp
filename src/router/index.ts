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
          authRequired: true,
        },
      },
      {
        path: 'login',
        component: Login,
        meta: {
          titleKey: 'page.login.title',
          authRequired: false,
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

router.beforeEach((to, _, next) => {
  if (to.meta.authRequired && !isAuthenticated()) {
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router;
