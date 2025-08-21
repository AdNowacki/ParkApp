import { createI18n } from 'vue-i18n';
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../../src/components/pages/Home/Home.vue';

export const i18n = createI18n({
  legacy: false,
  locale: 'pl',
  messages: {
    pl: {
      'form.sign_in': 'Zaloguj się',
      'form.send': 'Wyślij',
      'form.email': 'Email',
      'form.password': 'Hasło',
    },
  },
});

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'HomeTest',
      component: Home,
    },
  ],
});
