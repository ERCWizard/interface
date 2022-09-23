import { SupportedChainId } from './chains'

type factoryAddressesType = {
  [type: string]: any
}

const POLYGON_MAINNET_FACTORY_ADDRESS = '0x89CC62092e888B4DcA765245ccf1881e12190847'
const MUMBAI_TESTNET_FACTORY_ADDRESS = '0x48aB10b4f4867D663CD7Cbf38F2F5A448a46F69d'
const HARDHAT_TESTNET_FACTORY_ADDRESS = '0xcf7ed3acca5a467e9e704c703e8d87f634fb0fc9'

export const factoryAddresses: factoryAddressesType = {
  [SupportedChainId.POLYGON]: POLYGON_MAINNET_FACTORY_ADDRESS,
  [SupportedChainId.MUMBAI]: MUMBAI_TESTNET_FACTORY_ADDRESS,
  [SupportedChainId.HARDHAT]: HARDHAT_TESTNET_FACTORY_ADDRESS,
}
