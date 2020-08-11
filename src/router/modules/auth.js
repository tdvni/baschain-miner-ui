const authRouter = [
  {
    path: '/singin',
    alias: '/login',
    component: () => import('@/views/auth/SingIn.vue'),
    hidden: true,
  },
  {
    path: '/singup',
    alias: 'registration',
    components: () => import('@/views/auth/SingUp.vue'),
    hidden: true
  }
]

export default authRouter
