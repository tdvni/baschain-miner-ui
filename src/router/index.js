import Vue from 'vue';
import Router from 'vue-router';
import constantRoutes from './routes'

Vue.use(Router);

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes,
});

export const asyncRoutes = [

]
