/**
 * Updates cy.visit() to include an injected window.ethereum provider.
 */
import { Eip1193Bridge } from '@ethersproject/experimental/lib/eip1193-bridge'
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { JsonRpcProvider } from '@ethersproject/providers'
import { Wallet } from '@ethersproject/wallet'

/**
 * hardhat  id 31337 | hex 0x7A69
 * mumbai   id 80001 | hex 0x13881
 */
const chainId = 31337
const chainIdHex = '0x7A69'

// hardhat prive key
const TEST_PRIVATE_KEY = `0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80`

// address of the above key
export const TEST_ADDRESS_NEVER_USE = new Wallet(TEST_PRIVATE_KEY).address

// format wallet address
export const TEST_ADDRESS_NEVER_USE_SHORTENED = `${TEST_ADDRESS_NEVER_USE.substr(
  0,
  6
)}...${TEST_ADDRESS_NEVER_USE.substr(-4, 4)}`

const provider = new JsonRpcProvider(
  `https://polygon-mumbai.g.alchemy.com/v2/${process.env.POLYGON_ALCHEMY_API_KEY}`,
  chainId
)
const signer = new Wallet(TEST_PRIVATE_KEY, provider)

export const injected = new (class extends Eip1193Bridge {
  chainId = chainId

  async sendAsync(...args: any[]) {
    console.debug('sendAsync called', ...args)
    return this.send(...args)
  }
  async send(...args: any[]) {
    console.debug('send called', ...args)
    const isCallbackForm =
      typeof args[0] === 'object' && typeof args[1] === 'function'
    let callback
    let method
    let params
    if (isCallbackForm) {
      callback = args[1]
      method = args[0].method
      params = args[0].params
    } else {
      method = args[0]
      params = args[1]
    }
    if (method === 'eth_requestAccounts' || method === 'eth_accounts') {
      if (isCallbackForm) {
        callback({ result: [TEST_ADDRESS_NEVER_USE] })
      } else {
        return Promise.resolve([TEST_ADDRESS_NEVER_USE])
      }
    }
    if (method === 'eth_chainId') {
      if (isCallbackForm) {
        callback(null, { result: chainIdHex })
      } else {
        return Promise.resolve(chainIdHex)
      }
    }
    try {
      const result = await super.send(method, params)
      console.debug('result received', method, params, result)
      if (isCallbackForm) {
        callback(null, { result })
      } else {
        return result
      }
    } catch (error) {
      if (isCallbackForm) {
        callback(error, null)
      } else {
        throw error
      }
    }
  }
})(signer, provider)
