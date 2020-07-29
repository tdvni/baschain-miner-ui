import configuration from '@/config'
import { BrowserRuntime } from './check-runtime'

const baseInfo = require('./proinfo.json')

export const DAppInfo = Object.assign({},baseInfo,{
  extensionRequire: ['MetaMask']
}, { config: configuration })


export default {
  DAppInfo,
  BrowserRuntime
}
