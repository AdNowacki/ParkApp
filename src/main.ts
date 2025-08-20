import { createApp, h, provide } from 'vue';
import { DefaultApolloClient } from '@vue/apollo-composable';
import { plugin, defaultConfig } from '@formkit/vue';
import formkitConfig from '../formkit.config.ts';
import { apolloClient } from './apollo';
import router from './router';

import './style.css';
import App from './App.vue';

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render: () => h(App),
});

app.use(plugin, defaultConfig(formkitConfig));
app.use(router);
app.mount('#app');
