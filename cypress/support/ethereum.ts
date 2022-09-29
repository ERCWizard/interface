/**
 * Updates cy.visit() to include an injected window.ethereum provider.
 */
import { Eip1193Bridge } from '@ethersproject/experimental/lib/eip1193-bridge'
import { JsonRpcProvider } from '@ethersproject/providers'
import { Wallet } from '@ethersproject/wallet'
import { ethers } from 'ethers'
import { formatAddress } from '../../utils/formatAddress'

/**
 * hardhat  id 31337 | hex 0x7A69
 * mumbai   id 80001 | hex 0x13881
 * polygon  id 137   | hex 0x89
 */
const chainId = 137
const chainIdHex = '0x89'

const rpcProviders = {
  31337: 'http://127.0.0.1:8545',
  80001: `https://polygon-mumbai.g.alchemy.com/v2/${Cypress.env('POLYGON_ALCHEMY_API_KEY')}`,
  137: `https://polygon-mainnet.g.alchemy.com/v2/${Cypress.env('POLYGON_ALCHEMY_API_KEY')}`,
}

// test private key || hardhat private key
const TEST_PRIVATE_KEY = Cypress.env('TEST_PRIVATE_KEY')

// address of the above key
export const TEST_ADDRESS_NEVER_USE = new Wallet(TEST_PRIVATE_KEY).address

// format wallet address
export const TEST_ADDRESS_NEVER_USE_SHORTENED = formatAddress(TEST_ADDRESS_NEVER_USE)

const rpcProvider = rpcProviders[chainId]

const provider = new JsonRpcProvider(rpcProvider, chainId)

const signer = new Wallet(TEST_PRIVATE_KEY, provider)

export const injected = new (class extends Eip1193Bridge {
  chainId = chainId

  async sendAsync(...args: any[]) {
    console.debug('sendAsync called', ...args)
    return this.send(...args)
  }
  async send(...args: any[]) {
    console.debug('send called', ...args)
    const isCallbackForm = typeof args[0] === 'object' && typeof args[1] === 'function'
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
    // Mock out request accounts and chainId
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
      // If from is present on eth_call it errors, removing it makes the library set
      // from as the connected wallet which works fine
      if (params && params.length && params[0].from && method === 'eth_call') delete params[0].from
      let result
      // For sending a transaction if we call send it will error
      // as it wants gasLimit in sendTransaction but hexlify sets the property gas
      // to gasLimit which makes sensd transaction error.
      // This have taken the code from the super method for sendTransaction and altered
      // it slightly to make it work with the gas limit issues.
      if (params && params.length && params[0].from && method === 'eth_sendTransaction') {
        // Hexlify will not take gas, must be gasLimit, set this property to be gasLimit
        params[0].gasLimit = params[0].gas
        delete params[0].gas
        // If from is present on eth_sendTransaction it errors, removing it makes the library set
        // from as the connected wallet which works fine
        delete params[0].from
        const req = ethers.providers.JsonRpcProvider.hexlifyTransaction(params[0])
        // Hexlify sets the gasLimit property to be gas again and send transaction requires gasLimit
        req.gasLimit = req.gas
        delete req.gas
        // Send the transaction
        const tx = await this.signer.sendTransaction(req)
        result = tx.hash
      } else {
        // All other transactions the base class works for
        result = await super.send(method, params)
      }
      console.debug('result received', method, params, result)
      if (isCallbackForm) {
        callback(null, { result })
      } else {
        return result
      }
    } catch (error) {
      console.log(error)
      if (isCallbackForm) {
        callback(error, null)
      } else {
        throw error
      }
    }
  }
})(signer, provider)
