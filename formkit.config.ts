import { defaultConfig } from '@formkit/vue';
import { pl } from '@formkit/i18n';
import { rootClasses } from './formkit.theme';
import appConfig from '~~/app.config.js';

export default defaultConfig({
  locales: { pl },
  locale: appConfig.defaultLocale,
  config: {
    rootClasses,
  },
});
