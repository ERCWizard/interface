import { Contract } from 'enums'

type contractFunctionNameType = {
  [type: string]: string
}

export const contractFunctionName: contractFunctionNameType = {
  [Contract.ERC721]: 'createERC721Contract',
  [Contract.ERC1155]: 'createERC1155Contract',
}
