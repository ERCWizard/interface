import { Contract } from 'enums'

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
  tooltip: string
}

export const contractFormInputs: ContractFormInputs = {
  [Contract.ERC721]: [
    {
      type: 'text',
      name: 'name',
      placeholder: 'collection name',
      min: '',
      max: '',
      minlength: '1',
      maxlength: '',
      autoComplete: 'off',
      tooltip: 'This sets the name for the collection',
    },
    {
      type: 'text',
      name: 'symbol',
      placeholder: 'collection symbol',
      min: '',
      max: '',
      minlength: '1',
      maxlength: '',
      autoComplete: 'off',
      tooltip: 'This sets the 3 - 4 letter abbreviation for the collection',
    },
    {
      type: 'number',
      name: 'cost',
      placeholder: 'mint cost (in wei)',
      min: '0',
      max: '',
      minlength: '1',
      maxlength: '',
      autoComplete: 'off',
      tooltip:
        'This sets the mint cost (in wei). Wei is the smallest denomination of ether. For instance, 1 ether (ETH) is equivalent to 1x(10^18) wei',
    },
    {
      type: 'number',
      name: 'maxSupply',
      placeholder: 'max supply',
      min: '1',
      max: '',
      minlength: '1',
      maxlength: '',
      autoComplete: 'off',
      tooltip: 'This sets the max supply of the collection (e.g. 10000)',
    },
    {
      type: 'number',
      name: 'maxMintAmountPerTx',
      placeholder: 'max mint amount per tx',
      min: '1',
      max: '',
      minlength: '1',
      maxlength: '',
      autoComplete: 'off',
      tooltip: 'This sets the max mint amount by address per single transaction',
    },
    {
      type: 'text',
      name: 'hiddenMetadataUri',
      placeholder: 'hidden metadata uri',
      min: '',
      max: '',
      minlength: '1',
      maxlength: '',
      autoComplete: 'off',
      tooltip: 'This sets the hidden metadata uri and will be used when the revealed state is set to false',
    },
    {
      type: 'text',
      name: 'uriPrefix',
      placeholder: 'metadata uri prefix',
      min: '',
      max: '',
      minlength: '1',
      maxlength: '',
      autoComplete: 'off',
      tooltip: 'This sets the metadata uri prefix and will be used when the revealed state is set to true',
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
      tooltip: 'This sets the address of the royalty receiver',
    },
    {
      type: 'number',
      name: 'feePercent',
      placeholder: 'royalty fee percent',
      min: '0',
      max: '100',
      minlength: '1',
      maxlength: '',
      autoComplete: 'off',
      tooltip:
        'This sets the royalty fee percent (e.g. 5 = 5%). The average range varies between 0-9%. Going above 25% is not recommended',
    },
  ],
  [Contract.ERC1155]: [
    {
      type: 'text',
      name: 'name',
      placeholder: 'collection name',
      min: '',
      max: '',
      minlength: '1',
      maxlength: '',
      autoComplete: 'off',
      tooltip: 'This sets the name for the collection',
    },
    {
      type: 'text',
      name: 'symbol',
      placeholder: 'collection symbol',
      min: '',
      max: '',
      minlength: '1',
      maxlength: '',
      autoComplete: 'off',
      tooltip: 'This sets the 3 - 4 letter abbreviation for the collection',
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
      tooltip: 'This sets the id for the token',
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
      tooltip: 'This sets the amount of the token',
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
      tooltip: 'This sets the metadata uri for the token',
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
      tooltip: 'This sets the address of the royalty receiver',
    },
    {
      type: 'number',
      name: 'feePercent',
      placeholder: 'royalty fee percent',
      min: '0',
      max: '100',
      minlength: '1',
      maxlength: '',
      autoComplete: 'off',
      tooltip:
        'This sets the royalty fee percent (e.g. 5 = 5%). The average range varies between 0-9%. Going above 25% is not recommended',
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
