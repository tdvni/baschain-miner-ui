import { settings as defaultSettings } from '@/config'

import actions from './actions'
import mutations from './mutations'

const getDefaultSettings = () => {
  const settings = JSON.parse(JSON.stringify(defaultSettings))
  return settings
}

const settings = {
  actions,
  getters: {
    locale: state => state.locale,
    toolbarDense: state => state.dense,
    navbarDense: state => state.navbar.dense,
    navbarShow: state => state.navbar.show,
    navbarLogo: state => state.navbar.logo,
    fullscreenShow: state => state.fullscreen.show,
    fullscreenBtn: state => state.fullscreen.btn,
  },
  mutations,
  state: getDefaultSettings(),
}

export default settings
