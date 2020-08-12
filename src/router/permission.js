import NProgress from "nprogress";
import router from "./index";
import store from "../store";
import authRouter from "./modules/auth";

import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false });

// Authentication

const whiteList = ["/landing", "/lang"]
  .concat(Array.from(authRouter), route => route.path)
  .concat(Array.from(authRouter, route => route.alias))
  .filter(route => route);

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
    console.warn("Router To",to)
  } catch (err) {
    console.warn(`[router.beforeEach] \t${to.path}:${err}`);
  }

  console.log(logMsg, to.path);
  NProgress.done();
});

router.afterEach(async () => {
  NProgress.done();
});
