import { Standard } from 'enums'

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
  required: boolean
  autoComplete: string
  tooltip: string
}

const tooltip_name = `This sets the name for the collection (e.g. Cool Wizards)`
const tooltip_symbol = `This sets the 2 - 5 letter abbreviation for the collection (e.g. CW)`
const tooltip_cost = `This sets the mint cost (in wei). Wei is the smallest denomination of ether. For instance, 1 ether (ETH) is equivalent to 1x(10^18) (1000000000000000000 wei)`
const tooltip_maxSupply = `This sets the max supply of the collection (e.g. 10000)`
const tooltip_maxMintAmount = `This sets the max mint amount by address per single transaction (e.g. 3)`
const tooltip_hiddenMetadataUri = `This sets the hidden metadata uri and will be used when the revealed state is set to false. Can be set at any time (e.g. ipfs://hidden-metadata-cid-hash or https://hidden-metadata). It is recommended to set this at the beginning of the minting phase`
const tooltip_baseMetadataUri = `This sets the base metadata uri prefix and will be used when the revealed state is set to true. Can be set at any time (e.g. ipfs://collection-metadata-cid-hash or https://collection-metadata). It is recommended to set this at the end of the minting phase`
const tooltip_royaltyReceiver = `This sets the address of the royalty receiver`
const tooltip_feePercent = `This sets the royalty fee percent. The average range varies between 0-9%. Going above 25% is not recommended`
const tooltip_tokenId = `This sets the id for the token (e.g. 1)`
const tooltip_tokenAmount = `This sets the amount of the token (e.g. 100)`
const tooltip_tokenMetadataUri = `This sets the base metadata uri for the token (e.g. ipfs://token-metadata-cid-hash or https://token-metadata)`

export const contractFormInputs: ContractFormInputs = {
  [Standard.ERC721A]: [
    {
      type: 'text',
      name: 'name',
      placeholder: 'collection name',
      min: '',
      max: '',
      minlength: '1',
      maxlength: '',
      required: true,
      autoComplete: 'off',
      tooltip: tooltip_name,
    },
    {
      type: 'text',
      name: 'symbol',
      placeholder: 'collection symbol',
      min: '',
      max: '',
      minlength: '1',
      maxlength: '',
      required: true,
      autoComplete: 'off',
      tooltip: tooltip_symbol,
    },
    {
      type: 'number',
      name: 'cost',
      placeholder: 'mint cost (in wei)',
      min: '0',
      max: '',
      minlength: '1',
      maxlength: '',
      required: true,
      autoComplete: 'off',
      tooltip: tooltip_cost,
    },
    {
      type: 'number',
      name: 'maxSupply',
      placeholder: 'max supply',
      min: '1',
      max: '',
      minlength: '1',
      maxlength: '',
      required: true,
      autoComplete: 'off',
      tooltip: tooltip_maxSupply,
    },
    {
      type: 'number',
      name: 'maxMintAmountPerTx',
      placeholder: 'max mint amount per tx',
      min: '1',
      max: '',
      minlength: '1',
      maxlength: '',
      required: true,
      autoComplete: 'off',
      tooltip: tooltip_maxMintAmount,
    },
    {
      type: 'text',
      name: 'hiddenMetadataUri',
      placeholder: 'hidden metadata uri',
      min: '',
      max: '',
      minlength: '0',
      maxlength: '',
      required: false,
      autoComplete: 'off',
      tooltip: tooltip_hiddenMetadataUri,
    },
    {
      type: 'text',
      name: 'uriPrefix',
      placeholder: 'base metadata uri',
      min: '',
      max: '',
      minlength: '0',
      maxlength: '',
      required: false,
      autoComplete: 'off',
      tooltip: tooltip_baseMetadataUri,
    },
    {
      type: 'text',
      name: 'royaltyReceiver',
      placeholder: 'royalty receiver address',
      min: '',
      max: '',
      minlength: '42',
      maxlength: '42',
      required: true,
      autoComplete: 'off',
      tooltip: tooltip_royaltyReceiver,
    },
    {
      type: 'range',
      name: 'feePercent',
      placeholder: 'royalty fee percent',
      min: '0',
      max: '10000',
      minlength: '1',
      maxlength: '',
      required: true,
      autoComplete: 'off',
      tooltip: tooltip_feePercent,
    },
  ],
  [Standard.ERC1155]: [
    {
      type: 'text',
      name: 'name',
      placeholder: 'collection name',
      min: '',
      max: '',
      minlength: '1',
      maxlength: '',
      required: true,
      autoComplete: 'off',
      tooltip: tooltip_name,
    },
    {
      type: 'text',
      name: 'symbol',
      placeholder: 'collection symbol',
      min: '',
      max: '',
      minlength: '1',
      maxlength: '',
      required: true,
      autoComplete: 'off',
      tooltip: tooltip_symbol,
    },
    {
      type: 'number',
      name: 'id',
      placeholder: 'token id',
      min: '0',
      max: '',
      minlength: '1',
      maxlength: '',
      required: true,
      autoComplete: 'off',
      tooltip: tooltip_tokenId,
    },
    {
      type: 'number',
      name: 'amount',
      placeholder: 'token amount',
      min: '0',
      max: '',
      minlength: '1',
      maxlength: '',
      required: true,
      autoComplete: 'off',
      tooltip: tooltip_tokenAmount,
    },
    {
      type: 'text',
      name: 'uri',
      placeholder: 'token metadata uri',
      min: '',
      max: '',
      minlength: '1',
      maxlength: '',
      required: true,
      autoComplete: 'off',
      tooltip: tooltip_tokenMetadataUri,
    },
    {
      type: 'text',
      name: 'royaltyReceiver',
      placeholder: 'royalty receiver address',
      min: '',
      max: '',
      minlength: '42',
      maxlength: '42',
      required: true,
      autoComplete: 'off',
      tooltip: tooltip_royaltyReceiver,
    },
    {
      type: 'range',
      name: 'feePercent',
      placeholder: 'royalty fee percent',
      min: '0',
      max: '10000',
      minlength: '1',
      maxlength: '',
      required: true,
      autoComplete: 'off',
      tooltip: tooltip_feePercent,
    },
  ],
}

type ContractFormState = {
  [type: string]: {}
}

export const contractFormState: ContractFormState = {
  [Standard.ERC721A]: {
    name: '',
    symbol: '',
    cost: '',
    maxSupply: '',
    maxMintAmountPerTx: '',
    hiddenMetadataUri: '',
    uriPrefix: '',
    royaltyReceiver: '',
    feePercent: '0',
  },
  [Standard.ERC1155]: {
    name: '',
    symbol: '',
    id: '',
    amount: '',
    uri: '',
    royaltyReceiver: '',
    feePercent: '0',
  },
}
