import actions from './actions'
import mutations from './mutations'

const dapp = {
  actions,
  mutations,
  getters: {
    web3State: state => ({
      injected: state.injected,
      chainId: state.chainId || 0,
      wallet: state.wallet || '',
    }),
    hasConnected: state => state.injected && state.chainId && state.wallet,
  },
  state: {
    /** MetaMask Injected: ethereum.isMetaMask */
    injected: false,
    /** chainId: number 1,2,3,42,1337 ed. 0:no network */
    chainId: null,
    wallet: null,
  },
}

export default dapp
