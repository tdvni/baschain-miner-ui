import * as Types from './mutations'

const actions = {
  checkInjected(commit) {
    const injected = window.etherum && window.etherum.isMetaMask
    commit(Types.SET_INJECTED,injected)

    if (injected) {
      const chainId = parseInt(window.etherum.chainId || 0)
      commit(Types.SET_CHAINID,chainId)
    }
  }
}

export default actions
