import { settings } from '@/config'

const generalState = {
  /** MetaMask Injected: ethereum.isMetaMask */
  injected: false,
  /** chainId: number 1,2,3,42,1337 ed. 0:no network */
  chainId: null,
  wallet: null,
}

/**
 *
 */
const getDefaultSettings = () => {
  const settingsDefault = JSON.parse(JSON.stringify(settings))
  return Object.assign(settingsDefault, generalState)
}

const dapp = {
  getters: {
    web3State: state => ({
      injected: state.injected,
      chainId: state.chainId || 0,
      wallet: state.wallet || '',
    }),
    hasConnected: state => state.injected && state.chainId && state.wallet,
  },
  state: getDefaultSettings,
}

export default dapp
