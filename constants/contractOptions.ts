import { Contract } from 'enums'

export const contractOptions = [Contract.ERC721, Contract.ERC1155]

export const contractMetadata = {
  [Contract.ERC721]: {
    description: 'ERC-721 NFT smart contract',
    tags: ['nft'],
  },
  [Contract.ERC1155]: {
    description: 'ERC-1155 NFT smart contract',
    tags: ['nft'],
  },
}
