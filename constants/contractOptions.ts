import { Contract } from 'enums'

export const contractOptions = [Contract.ERC721A, Contract.ERC1155]

export const contractMetadata = {
  [Contract.ERC721A]: {
    description:
      'ERC721A is an improved implementation of the ERC721 Non-Fungible Token Standard that supports minting multiple tokens for close to the cost of one',
    tags: ['nft', 'custom', 'azuki'],
  },
  [Contract.ERC1155]: {
    description: 'ERC-1155 NFT smart contract',
    tags: ['nft', 'basic'],
  },
}
