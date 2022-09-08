import { Contract } from './contractOptions'

type ContractFormInputs = {
  [type: string]: Inputs[]
}

export type Inputs = {
  type: string
  name: string
  placeholder: string
  min: string
  max: string
  minlength: string
  maxlength: string
  autoComplete: string
}

export const contractFormInputs: ContractFormInputs = {
  [Contract.ERC721]: [
    {
      type: 'text',
      name: 'name',
      placeholder: 'contract name',
      min: '',
      max: '',
      minlength: '1',
      maxlength: '',
      autoComplete: 'off',
    },
    {
      type: 'text',
      name: 'symbol',
      placeholder: 'contract symbol',
      min: '',
      max: '',
      minlength: '1',
      maxlength: '',
      autoComplete: 'off',
    },
    {
      type: 'number',
      name: 'cost',
      placeholder: 'token mint cost',
      min: '0',
      max: '',
      minlength: '1',
      maxlength: '',
      autoComplete: 'off',
    },
    {
      type: 'number',
      name: 'maxSupply',
      placeholder: 'token max supply',
      min: '1',
      max: '',
      minlength: '1',
      maxlength: '',
      autoComplete: 'off',
    },
    {
      type: 'number',
      name: 'maxMintAmountPerTx',
      placeholder: 'token max mint amount per tx',
      min: '1',
      max: '',
      minlength: '1',
      maxlength: '',
      autoComplete: 'off',
    },
    {
      type: 'text',
      name: 'hiddenMetadataUri',
      placeholder: 'token hidden metadata uri',
      min: '',
      max: '',
      minlength: '1',
      maxlength: '',
      autoComplete: 'off',
    },
    {
      type: 'text',
      name: 'uriPrefix',
      placeholder: 'token metadata uri prefix',
      min: '',
      max: '',
      minlength: '1',
      maxlength: '',
      autoComplete: 'off',
    },
    {
      type: 'text',
      name: 'royaltyReceiver',
      placeholder: 'royalty receiver address',
      min: '',
      max: '',
      minlength: '42',
      maxlength: '42',
      autoComplete: 'off',
    },
    {
      type: 'number',
      name: 'feePercent',
      placeholder: 'royalty fee percent (e.g. 5)',
      min: '0',
      max: '100',
      minlength: '1',
      maxlength: '',
      autoComplete: 'off',
    },
  ],
  [Contract.ERC1155]: [
    {
      type: 'text',
      name: 'name',
      placeholder: 'contract name',
      min: '',
      max: '',
      minlength: '1',
      maxlength: '',
      autoComplete: 'off',
    },
    {
      type: 'text',
      name: 'symbol',
      placeholder: 'contract symbol',
      min: '',
      max: '',
      minlength: '1',
      maxlength: '',
      autoComplete: 'off',
    },
    {
      type: 'number',
      name: 'id',
      placeholder: 'token id',
      min: '0',
      max: '',
      minlength: '1',
      maxlength: '',
      autoComplete: 'off',
    },
    {
      type: 'number',
      name: 'amount',
      placeholder: 'token amount',
      min: '0',
      max: '',
      minlength: '1',
      maxlength: '',
      autoComplete: 'off',
    },
    {
      type: 'text',
      name: 'uri',
      placeholder: 'token metadata uri',
      min: '',
      max: '',
      minlength: '1',
      maxlength: '',
      autoComplete: 'off',
    },
    {
      type: 'text',
      name: 'royaltyReceiver',
      placeholder: 'royalty receiver address',
      min: '',
      max: '',
      minlength: '42',
      maxlength: '42',
      autoComplete: 'off',
    },
    {
      type: 'number',
      name: 'feePercent',
      placeholder: 'royalty fee percent (e.g. 5)',
      min: '0',
      max: '100',
      minlength: '1',
      maxlength: '',
      autoComplete: 'off',
    },
  ],
}

type ContractFormState = {
  [type: string]: {}
}

export const contractFormState: ContractFormState = {
  [Contract.ERC721]: {
    name: '',
    symbol: '',
    cost: '',
    maxSupply: '',
    maxMintAmountPerTx: '',
    hiddenMetadataUri: '',
    uriPrefix: '',
    royaltyReceiver: '',
    feePercent: '',
  },
  [Contract.ERC1155]: {
    name: '',
    symbol: '',
    id: '',
    amount: '',
    uri: '',
    royaltyReceiver: '',
    feePercent: '',
  },
}
