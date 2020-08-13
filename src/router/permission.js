import NProgress from "nprogress";
import router from "./index";
import store from "../store";
import authRouter from "./modules/auth";

import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false });

// Authentication

const whiteList = ["/index", "/land", "/dashboard", "/"]
  .concat(Array.from(authRouter, route => route.path))
  .concat(Array.from(authRouter, route => route.alias))
  .filter(route => route);

console.log("whiteList", whiteList);

// eslint-disable-next-line
function hasPermission(roles, permissionRoles) {
  if (roles.includes("admin")) return true;

  if (!permissionRoles) return true;

  return roles.some(role => permissionRoles.includes(role));
}

router.beforeEach(async (to, from, next) => {
  NProgress.start();

  let logMsg = "[router.beforeEach]";

  try {
    // determine if there has token
    console.warn("Router To", to.path, store.getters["user/token"]);
    if (store.getters["user/token"]) {
      logMsg += "\t[token]";

      next();
    } else {
      logMsg += "\t[token]";
      if (whiteList.includes(to.path)) {
        logMsg += "\t[whiteList]";
        next();
      } else {
        logMsg += "\t[whiteList]";
        next(`/singin?redirect=${to.path}`);
      }
    }
  } catch (err) {
    console.warn(`[router.beforeEach] \t${to.path}:${err}`);
  }

  // eslint-disable-next-line
  console.log(logMsg, to.path);
  NProgress.done();
});

router.afterEach(async () => {
  NProgress.done();
});
