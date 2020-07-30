export const SET_INJECTED = "setInjected"
export const SET_CHAINID = "setChainId"
export const SET_WALLET = "setWallet"
export const SET_WEB3_STATE = "setWeb3State"


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
