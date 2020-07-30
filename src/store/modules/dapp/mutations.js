export const SET_INJECTED = "SET_INJECTED";
export const SET_CHAINID = "SET_CHAINID";
export const SET_WALLET = "SET_WALLET";
export const SET_WEB3_STATE = "SET_WEB3_STATE";


export default {
  [SET_INJECTED](state,injected) {
    state.injected = injected
  },
  [SET_CHAINID](state,chainId) {
    state.chainId = chainId
  },
  [SET_WALLET](state,wallet) {
    state.wallet = wallet
  },
  [SET_WEB3_STATE](state,{ chainId ,wallet = '' }) {
    state.chainId = chainId || parseInt(window.ethereum.chainId)
    state.wallet = wallet
  },
}
