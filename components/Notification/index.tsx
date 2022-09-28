import { ArrowUpRightIcon } from '@heroicons/react/20/solid'
import { factoryAddresses } from 'constants/addresses'
import { SupportedChainId } from 'constants/chains'

const Notification = () => {
  return (
    <div className="w-full py-4 px-8 flex items-center justify-center cool-gradient font-RobotoMono space-x-2 text-xs sm:text-sm uppercase">
      <div className="mr-2 block">
        try erc wizard <span>🪄</span>{' '}
        <span className="hidden sm:inline-block">start by deploying your first smart contract</span>
      </div>
      <a
        href={`https://polygonscan.com/address/${factoryAddresses[SupportedChainId.POLYGON]}`}
        className="flex items-center justify-center whitespace-nowrap p-2 bg-white text-black hover:bg-black hover:text-white text-xs"
      >
        verified contract
        <ArrowUpRightIcon className="w-3 h-3 ml-1" />
      </a>
    </div>
  )
}

export default Notification
