import { Standard, Tier } from 'enums'
import { ERC721A_Basic_Abi, ERC721A_Premium_Abi, ERC1155_Basic_Abi } from 'abi'

type ContractAbi = {
  [standard: string]: {
    [tier: Tier | number]: any
  }
}

export const contractAbi: ContractAbi = {
  [Standard.ERC721A]: {
    [Tier.basic]: ERC721A_Basic_Abi,
    [Tier.premium]: ERC721A_Premium_Abi,
  },
  [Standard.ERC1155]: {
    [Tier.basic]: ERC1155_Basic_Abi,
  },
}
