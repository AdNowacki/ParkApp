declare module '~~/app.config.js' {
  const appConfig: {
    app: {
      name: string;
      version: string;
      description: string;
      author: string;
    };
    availableLocales: { [key: string]: string };
    defaultLocale: string;
    authSessionKey: string;
  };

  export default appConfig;
}
