import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import dotenv from 'dotenv';
import appConfig from '../../app.config.js';
dotenv.config();

(async () => {
  try {
    const responses = await Promise.all(
      Object.values(appConfig.availableLocales).map((locale) => {
        // eslint-disable-next-line no-undef
        const url = `https://localise.biz/api/export/locale/${locale}.json?key=${process.env.VITE_LOCO_TOKEN}`;
        return fetch(url);
      })
    );

    const localesDir = path.resolve('locales');

    try {
      await mkdir(localesDir, { recursive: true });
    } catch (err) {
      console.error('Nie udało się utworzyć folderu locales:', err);
    }

    for (const response of responses) {
      const locale = response.url.split('.')[1].split('/').pop();
      const json = await response.json();

      const translationsPath = path.resolve('locales', `${locale}.json`);

      try {
        await writeFile(translationsPath, JSON.stringify(json, null), 'utf8');
        console.log(translationsPath);
      } catch (error) {
        console.error(error);
      }
    }
  } catch (error) {
    console.error('Error fetching translations:', error);
  }
})();
