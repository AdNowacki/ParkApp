import { createApp, h, provide } from 'vue';
import { createI18n } from 'vue-i18n';
import { DefaultApolloClient } from '@vue/apollo-composable';
import { plugin, defaultConfig } from '@formkit/vue';
import { apolloClient } from '~/apollo';
import router from '~/router';
import formkitConfig from '~~/formkit.config.ts';
import appConfig from '~~/app.config';

import './style.css';
import App from './App.vue';

import en from '../locales/en.json';
import pl from '../locales/pl.json';

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render: () => h(App),
});

const i18n = createI18n({
  legacy: false,
  locale: appConfig.defaultLocale,
  fallbackLocale: appConfig.availableLocales.en,
  messages: {
    pl,
    en,
  },
});

app.use(plugin, defaultConfig(formkitConfig));
app.use(router);
app.use(i18n);
app.mount('#app');

router.beforeResolve((to, _, next) => {
  const locale = to.params.locale as string | undefined;
  if (locale && Object.values(appConfig.availableLocales).includes(locale)) {
    i18n.global.locale.value = locale as 'pl' | 'en';
  }
  next();
});

router.afterEach((to) => {
  const titleKey = to.meta.titleKey;
  if (titleKey) {
    document.title = i18n.global.t(titleKey as string) as string;
  }
});
