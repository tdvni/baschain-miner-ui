import { setLocale } from '@/locale'
import {
  SET_SETTINGS,
  SET_LOCALE,
  TOOLBAR_DENSE_TOGGLE,
  NAVBAR_DENSE_TOGGLE,
  NAVBAR_TOGLLE,
  NAVBAR_LOGO_TOGGLE,
  NAVBAR_STATE,
  FULLSCREEN_TOGGLE,
} from "./mutations";

const actions = {
  SetLocale: async ({ commit }, payload) => {
    commit(SET_LOCALE, payload)
    await setLocale(payload.locale)
  },
  SetBatchSettings: async ({ commit }, payload) => {
    commit(SET_SETTINGS, payload)
  },
  ToolbarDenseToggle: async ({ commit }) => {
    commit(TOOLBAR_DENSE_TOGGLE)
  },
  NavbarDenseToggle: async ({ commit }) => {
    commit(NAVBAR_DENSE_TOGGLE)
  },
  NarbarToggle: async ({ commit }) => {
    commit(NAVBAR_TOGLLE)
  },
  NarbarLogoToggle: ({ commit }) => {
    commit(NAVBAR_LOGO_TOGGLE)
  },
  NavbarState: async ({ commit },payload) => {
    commit(NAVBAR_STATE,payload)
  },
  FullscreenToggle: ({ commit },payload) => {
    commit(FULLSCREEN_TOGGLE,payload)
  },
}

export default actions
