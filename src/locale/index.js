import Vue from 'vue'
import VueI18n from 'vue-i18n'

import { settings } from '@/config'
import zh from './zh_CN'
import en from './en_US'
import ja from './ja_JP'

import vuetify from './vuetify'

// eslint-disable-next-line
Vue.use(VueI18n)

const messages = {
  en: {
    ...en,
    $vuetity: vuetify.en,
  },
  zh: {
    ...zh,
    $vuetity: vuetify.zh,
  },
  ja: {
    ...ja,
    $vuetity: vuetify.ja,
  },
}


/**
 * selector
 */
export const locales = [
  {
    title: "English",
    locale: "en",
    abbr: 'ENG',
  },
  {
    title: "中文",
    locale: "zh",
    abbr: 'CHN',
  },
  {
    title: "日本語",
    locale: "ja",
    abbr: 'JPY',
  },
]

export const i18n = new VueI18n({
  locale: settings.locale,
  fallbackLocale: settings.locale,
  messages,
})

/**
 *
 * @param {*} locale
 */
export async function setLocale(locale) {
  if (i18n.locale !== locale) {
    // console.log(`change current locale : "${locale}" .`)
    i18n.locale = locale || settings.locale
  } else {
    // console.info(`[locale] "${locale}" is current.`)
  }
  return i18n.locale
}

export default i18n
