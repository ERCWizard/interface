import { Standard, Tier } from 'enums'
import { tierValues } from 'enums/Tier'

interface ContractOptions {
  [standard: string]: {
    tier: Tier[]
  }
}

interface ContractMetadata {
  [standard: string]: {
    [tier: number]: {
      description: string
      tags: string[]
      tier: Tier | string
    }
  }
}

export const contractOptions: ContractOptions = {
  [Standard.ERC721A]: {
    tier: [Tier.basic, Tier.premium],
  },
  [Standard.ERC1155]: {
    tier: [Tier.basic],
  },
}

export const contractMetadata: ContractMetadata = {
  [Standard.ERC721A]: {
    [Tier.basic]: {
      description: 'ERC721A is an improved implementation of the ERC721 Non-Fungible Token Standard',
      tags: ['azuki', 'nft'],
      tier: tierValues[Tier.basic],
    },
    [Tier.premium]: {
      description: 'ERC721A is an improved implementation of the ERC721 Non-Fungible Token Standard',
      tags: ['azuki', 'nft', 'whitelist'],
      tier: tierValues[Tier.premium],
    },
  },
  [Standard.ERC1155]: {
    [Tier.basic]: {
      description: 'ERC-1155 NFT smart contract',
      tags: ['nft'],
      tier: tierValues[Tier.basic],
    },
  },
}
