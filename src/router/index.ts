import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Login from '@/pages/Login.vue';
import NotFound from '@/common/NotFound.vue';
import appConfig from '~~/app.config.js';

const routes = [
  {
    path: '/:locale(pl|en)',
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
        meta: {
          titleKey: 'page.home.title',
          authRequired: true,
        },
      },
      {
        path: 'login',
        name: 'Login',
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
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _, next) => {
  const locale = to.params.locale || appConfig.availableLocales.pl;
  const isAuthenticated = sessionStorage.getItem(appConfig.authSessionKey);

  if (to.name === 'Login' && isAuthenticated) {
    next({ name: 'Home', params: { locale } });
  }

  if (to.meta.authRequired && !isAuthenticated) {
    next({ name: 'Login', params: { locale } });
  } else {
    next();
  }
});

export default router;
