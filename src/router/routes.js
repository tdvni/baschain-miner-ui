import Layout from "@/views/layout/DefGlobalLayout.vue";
import { Menu } from "@/locale/grp-types";

/* Router Modules */
import authRouter from './modules/auth'
import errorsRouter from './modules/errors'

const mainRoutes = [
  {
    path: "/home",
    name: "/home",
    component: () => import("@/components/HelloWorld.vue"),
    hidden: false
  },
  {
    path: "/landing",
    name: "/land",
    component: () => import("@/views/layout/DefGlobalLayout.vue"),
    hidden: true
  },
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/dashboard",
        alias: "/",
        component: () => import("@/views/dashboard/Index"),
        name: "Dashboard",
        meta: {
          title: `dashboard`,
          icon: "mdi-view-dashboard",
          noCache: true,
          affix: true
        }
      }
    ]
  },

  ...authRouter
]

/**
 *
 * @param {*} routes
 */
function handleNavTitle(routes) {
  return routes.map( (item) => {
    if (item.title) {
      item.tilte = `${Menu}.${item.title}`;
    }

    if (item.children) {
      item.children = handleNavTitle(item.children)
    }

    return item
  })
}

/**
 * When routing table is too long,you can split it into small modules
 */
export const asyncRoutes = [
  errorsRouter,
  {
    path: '*',
    redirect: '/error/404',
    hidden: true
  }
]

export const constantRoutes = handleNavTitle(mainRoutes);

export default constantRoutes
