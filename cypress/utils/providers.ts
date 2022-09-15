type Providers = {
  [index: number]: {
    visible: string
    contains: string
    attribute: string
  }
}

export const providers: Providers = {
  0: {
    visible: 'be.visible',
    contains: 'MetaMask (install)',
    attribute: 'be.disabled',
  },
  1: {
    visible: 'be.visible',
    contains: 'Coinbase Wallet',
    attribute: 'be.enabled',
  },
  2: {
    visible: 'be.visible',
    contains: 'WalletConnect',
    attribute: 'be.enabled',
  },
  3: {
    visible: 'be.visible',
    contains: 'Injected',
    attribute: 'be.enabled',
  },
}
