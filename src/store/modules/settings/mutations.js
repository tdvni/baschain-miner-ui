export const SET_SETTINGS = "setSettings"
export const SET_LOCALE = "setLocale"
export const TOOLBAR_DENSE_TOGGLE = "toolbarDenseToggle"
export const NAVBAR_DENSE_TOGGLE = "navbarDenseToggle"
export const NAVBAR_TOGLLE = "navbarToggle"
export const NAVBAR_LOGO_TOGGLE = "navbarLogoToggle"
export const FULLSCREEN_TOGGLE = "fullscreenToggle"

const mutations = {
  [SET_SETTINGS](state ,payload) {
    state.locale = payload.locale || state.locale
    state.dense = typeof payload.dense === 'boolean' ? payload.dense : state.dense
    state.navbar = payload.navbar || state.navbar
    state.fullscreen = payload.fullscreen || state.fullscreen

    // TODO Vuetify theme && i18n

  },
  [SET_LOCALE](state ,payload) {
    state.locale = payload.locale
  },
  [TOOLBAR_DENSE_TOGGLE](state) {
    state.dense = !state.dense
  },
  [NAVBAR_DENSE_TOGGLE](state) {
    state.navbar.dense = !state.navbar.dense
  },
  [NAVBAR_TOGLLE](state) {
    state.navbar.show = !state.navbar.show
  },
  [NAVBAR_LOGO_TOGGLE](state) {
    state.navbar.logo = !state.navbar.logo
  },
  [FULLSCREEN_TOGGLE](state,paylaod) {
    state.fullscreen.show = paylaod.state
  }
}

export default mutations
