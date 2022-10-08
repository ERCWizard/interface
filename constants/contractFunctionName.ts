import { Standard } from 'enums'

type contractFunctionNameType = {
  [type: string]: string
}

export const contractFunctionName: contractFunctionNameType = {
  [Standard.ERC721A]: 'createERC721AContract',
  [Standard.ERC1155]: 'createERC1155Contract',
}
