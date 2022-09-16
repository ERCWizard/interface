import { TEST_ADDRESS_NEVER_USE } from '../support/ethereum'

export const ERC721Inputs = [
  'contract name',
  'contract symbol',
  '100000000000000000', // cost / 0.1
  '10000', // max supply
  '3', // max mint amount per tx
  'ipfs://hidden-metadata', // hidden metadata uri
  'ipfs://metadata-uri-prefix', // metadata uri prefix
  TEST_ADDRESS_NEVER_USE, // royalty receiver address
  '5', // royalty fee percent
]

export const ERC1155Inputs = [
  'contract name',
  'contract symbol',
  '1', // token id
  '100', // token amount
  'ipfs://metadata-uri-prefix', // token metadata uri
  TEST_ADDRESS_NEVER_USE, // royalty receiver address
  '5', // royalty fee percent
]
