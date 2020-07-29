const authRouter = [
  {
    path: '/singin',
    alias: '/login',
    component: () => import('@/views/auth/SingIn.vue'),
    hidden: true,
  }
]

export default authRouter
