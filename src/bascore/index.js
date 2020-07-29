import configuration from '@/config'

const baseInfo = require('./proinfo.json')

export const DAppInfo = Object.assign({},baseInfo,{
  extensionRequire: ['MetaMask']
}, { config: configuration })

export default {
  DAppInfo
}
