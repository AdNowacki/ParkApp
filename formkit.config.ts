import { defaultConfig } from '@formkit/vue';
import { rootClasses } from './formkit.theme';
import { pl } from '@formkit/i18n';

export default defaultConfig({
  locales: { pl },
  locale: 'pl',
  config: {
    rootClasses,
  },
});
