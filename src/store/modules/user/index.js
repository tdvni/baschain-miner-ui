import actions from './actions'
import mutations from './mutations'

const defaultAvatar = "https://avatar.csdn.net/C/9/6/2_lanbery.jpg";

const user = {
  namespaced: true,
  actions,
  mutations,
  getters: {
    token: state => state.token,
    name: state => state.name || "Admin",
    user: state => state.user || "",
    avatar: state => state.avatar || defaultAvatar,
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
