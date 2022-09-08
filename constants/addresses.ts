import { SupportedChainId } from './chains'

type factoryAddressesType = {
  [type: string]: any
}

const POLYGON_MAINNET_FACTORY_ADDRESS = ''
const MUMBAI_TESTNET_FACTORY_ADDRESS = ''
const HARDHAT_TESTNET_FACTORY_ADDRESS =
  '0xcf7ed3acca5a467e9e704c703e8d87f634fb0fc9'

export const factoryAddresses: factoryAddressesType = {
  [SupportedChainId.POLYGON]: POLYGON_MAINNET_FACTORY_ADDRESS,
  [SupportedChainId.MUMBAI]: MUMBAI_TESTNET_FACTORY_ADDRESS,
  [SupportedChainId.HARDHAT]: HARDHAT_TESTNET_FACTORY_ADDRESS,
}
