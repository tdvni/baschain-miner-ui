export const SET_SETTINGS = "SET_SETTINGS";
export const SET_LOCALE = "SET_LOCALE";
export const TOOLBAR_DENSE_TOGGLE = "TOOLBAR_DENSE_TOGGLE";
export const NAVBAR_DENSE_TOGGLE = "NAVBAR_DENSE_TOGGLE";
export const NAVBAR_TOGLLE = "NAVBAR_TOGLLE";
export const NAVBAR_LOGO_TOGGLE = "NAVBAR_LOGO_TOGGLE";
export const NAVBAR_STATE = "NAVBAR_STATE";
export const FULLSCREEN_TOGGLE = "FULLSCREEN_TOGGLE";


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
  [NAVBAR_STATE](state,payload) {
    state.navbar.show = payload.state
  },
  [FULLSCREEN_TOGGLE](state,paylaod) {
    state.fullscreen.show = paylaod.state
  }
}

export default mutations
