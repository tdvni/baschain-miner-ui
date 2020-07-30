import Vue from 'vue'
import Vuex from 'vuex'
import CreateLogger from 'vuex/dist/logger'

import dapp from './modules/dapp'
import user from './modules/user'

const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    dapp,
    user,
  },
  strict: debug,
  plugins: debug ? [new CreateLogger()] : [],
})
