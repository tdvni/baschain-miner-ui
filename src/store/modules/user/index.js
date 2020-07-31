import actions from './actions'
import mutations from './mutations'

const user = {
  actions,
  mutations,
  getters: {
    token: state => state.token,
    name: state => state.name || "Admin",
    user: state => state.user || "",
    avatar: state => state.avatar || "https://avatars0.githubusercontent.com/u/41780738",
    status: state => state.status || ""
  },
  state: {
    token: "",
    name: "",
    user: "",
    avatar: "",
    status: ""
  }
};

export default user
