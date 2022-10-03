import { Contract } from 'enums'

type contractFunctionNameType = {
  [type: string]: string
}

export const contractFunctionName: contractFunctionNameType = {
  [Contract.ERC721A]: 'createERC721AContract',
  [Contract.ERC1155]: 'createERC1155Contract',
}
