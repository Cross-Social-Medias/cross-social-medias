export default function ({store, redirect, route}) {
  const userIsLoggedIn = !!store.state.auth.user;

  const authRoutes = ["admin", "mappings", "resume", "twitter", "youtube"];
  const authRegex = new RegExp(authRoutes.join("|")); // old request /^\/admin|mappings|resume|twitter(\/|$)/

  const noAuthRoutes = ["login"];
  const noAuthRegex = new RegExp(noAuthRoutes.join("|")); // old request /^\/login(\/|$)/

  const urlRequiresAuth = authRegex.test(route.fullPath);
  const urlRequiresNonAuth = noAuthRegex.test(route.fullPath);
  if (!userIsLoggedIn && urlRequiresAuth) {
    return redirect('/login');
  }
  if (userIsLoggedIn && urlRequiresNonAuth) {
    return route;
  }
  return Promise.resolve();
}
