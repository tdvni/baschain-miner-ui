import Layout from '@/views/layout/MainLayout.vue'

const constantRoutes = [
  {
    path: '/landing',
    name: '/land',
    component: () => import("@/views/layout/MainLayout.vue"),
    hidden: true,
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/dashboard',
        alias: '/',
        component: () => import('@/views/dashboard/Index'),
        name: 'Dashboard',
        meta: {
          title: 'route.dashboard',
          icon: 'mdi-view-dashboard',
          noCache: true,
          affix: true,
        },
      },
    ]
  }
]

export default constantRoutes
