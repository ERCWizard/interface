import { Contract } from 'enums'
import { ERC721AAbi, ERC1155Abi } from 'abi'

type ContractAbi = {
  [type: string]: any
}

export const contractAbi: ContractAbi = {
  [Contract.ERC721A]: ERC721AAbi,
  [Contract.ERC1155]: ERC1155Abi,
}
