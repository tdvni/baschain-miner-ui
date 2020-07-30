import Vue from 'vue'
import Vuex from 'vuex'
import CreateLogger from 'vuex/dist/logger'

import dapp from './modules/dapp'
import user from './modules/user'
import settings from './modules/settings'

const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  modules: {
    dapp,
    settings,
    user,
  },
  actions: {},
  state: {},
  strict: debug,
  plugins: debug ? [new CreateLogger()] : [],
})
