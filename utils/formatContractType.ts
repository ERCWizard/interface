import { Contract } from 'constants/contractOptions'

export const formatContractType = (type: number) => {
  switch (type) {
    case 0:
      return Contract.ERC721
    case 1:
      return Contract.ERC1155
    default:
      return ''
  }
}
