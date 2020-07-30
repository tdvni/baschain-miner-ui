import Layout from "@/views/layout/DefGlobalLayout.vue";

const constantRoutes = [
  {
    path: "/home",
    name: "/home",
    component: () => import("@/components/HelloWorld.vue"),
    hidden: true
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
          title: "route.dashboard",
          icon: "mdi-view-dashboard",
          noCache: true,
          affix: true
        }
      }
    ]
  }
];

export default constantRoutes
