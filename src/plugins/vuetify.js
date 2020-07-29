/**
 * Vuetify used vuetify-loader optimization package minize
 */
import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

import { settings } from '@/config'
import i18n from '@/locale/index'
import locales from '@/locale/vuetify'

Vue.use(Vuetify)

const opts = {
  theme: {
    options: {

    },
    dark: true,
  },
  icons: {
    iconfont: 'mdi',
  },
  lang: {
    locales,
    current: settings.locale,
    t: ( key, ...params ) => i18n.t(key,params)
  }
}

const vuetify = new Vuetify(opts)

export default vuetify
