import Vue from 'vue';
import Router from 'vue-router';
import constantRoutes from './routes'

// eslint-disable-next-line
Vue.use(Router);

// eslint-disable-next-line
const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes,
});

export default router;
