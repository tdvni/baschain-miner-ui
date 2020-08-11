import router from '@/router'
import { constantRoutes, asyncRoutes } from '@/router/routes'

const hasPermission = (roles,route) => {
  if (route.meta && route.meta.roles) {
    return roles.some( role => route.meta.roles.includes(role) )
  }
  return true
}

export const filterAsyncRoutes = (roles, routes) => {
  const res = []

  routes.forEach((route) => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(roles, tmp.children )
      }
      res.push(tmp)
    }
  })

  return res
}

const SET_ROUTES = "SET_ROUTES"

const permission = {
  state: {
    routes: [],
    addRoutes: []
  },
  getters: {
    permissionRoutes: state => state.routes,
    addRoutes: state => state.addRoutes
  },
  mutations: {
    [SET_ROUTES]: (state,routes) => {
      state.addRoutes = routes
      state.routes = constantRoutes.concat(routes)
    }
  },
  actions: {
    GenerateRoutes: async ({ commit },{ roles }) => {
      try {
        // eslint-disable-next-line
        console.groupCollapsed(`[vuex.permission] GenerateRoutes [${roles}]`)

        let accessedRoutes

        if (roles.includes('admin')) {
          accessedRoutes = asyncRoutes;
        } else {
          accessedRoutes = filterAsyncRoutes(roles, asyncRoutes)
        }

        commit(SET_ROUTES, accessedRoutes)

        // Apply selected allowed routes
        router.addRoutes(accessedRoutes)

        // eslint-disable-next-line
        console.log('[Vuex.permission] accessedRoutes ',constantRoutes)
        // eslint-disable-next-line
        console.groupEnd()

      } catch (err) {
        // eslint-disable-next-line
        console.warn('[vuex.permission] Generate Routes',err)
      }
    }
  }
}

export default permission
