// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import i18n from './locale'
import store from './store'

import App from './App'
import router from './router'
import vuetify from "./plugins/vuetify";
import './router/permission'

import { DAppInfo } from './bascore'
import { BrowserRuntime } from './bascore/check-runtime'

// eslint-disable-next-line
Vue.config.productionTip = false
global.BasRuntime = new BrowserRuntime(DAppInfo)

/* eslint-disable no-new */
// eslint-disable-next-line
global.dappvue = new Vue({
  i18n,
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
