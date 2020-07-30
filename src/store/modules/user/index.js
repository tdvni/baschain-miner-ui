import actions from './actions'
import mutations from './mutations'

const user = {
  actions,
  mutations,
  getters: {
    token: state => state.token,
    name: state => state.name,
  },
  state: {
    token: '',
    name: '',

  }
}

export default user
