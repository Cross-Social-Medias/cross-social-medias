export default function ({ isHMR, app, store, route, params, error, redirect }) {
  // If middleware is called from hot module replacement, ignore it
  if (isHMR) return;
  // only 2 languages for the moment
  const locale = route.fullPath.includes('/fr') ? "fr" : "en";
  if (store.state.locales.locales.indexOf(locale) === -1) {
    return error({ message: 'This page could not be found.', statusCode: 404 });
  }
  // Set locale
  store.commit('locales/SET_LANG', locale);
  app.i18n.locale = store.state.locales.locale;
  // If route is /en/... -> redirect to /...
  if (locale === 'en' && route.fullPath.indexOf('/en') === 0) {
    return redirect(route.fullPath.replace(/^\/en/, '/'));
  }
}
