import { Contract } from 'enums'
import { ERC721Abi, ERC1155Abi } from 'abi'

type ContractAbi = {
  [type: string]: any
}

export const contractAbi: ContractAbi = {
  [Contract.ERC721]: ERC721Abi,
  [Contract.ERC1155]: ERC1155Abi,
}
