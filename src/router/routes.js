const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import("@/layout/DefaultLayout.vue")
  }
]

export default routes
