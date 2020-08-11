import Vue from 'vue'
import Vuex from 'vuex'
import CreateLogger from 'vuex/dist/logger'

/** Modules */
import dapp from './modules/dapp'
import user from './modules/user'
import settings from './modules/settings'
import permission from './modules/permission'

const debug = process.env.NODE_ENV !== 'production'

// eslint-disable-next-line
Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  modules: {
    dapp,
    settings,
    user,
    permission,
  },
  actions: {},
  state: {},
  strict: debug,
  plugins: debug ? [new CreateLogger()] : []
});
