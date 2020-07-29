// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import i18n from './locale'

import vuetify from './plugins/vuetify'


import App from './App'
import router from './router'

import { DAppInfo } from './bascore'
import { BrowserRuntime } from './bascore/check-runtime'

Vue.config.productionTip = false
global.BasRuntime = new BrowserRuntime(DAppInfo)

/* eslint-disable no-new */
new Vue({
  router,
  i18n,
  vuetify,
  render: h => h( App ),
}).$mount('#app')
