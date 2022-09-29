import { ArrowUpRightIcon } from '@heroicons/react/20/solid'
import { factoryAddresses } from 'constants/addresses'
import { SupportedChainId } from 'constants/chains'
import { ercWizardDocsHref } from 'constants/hrefs'

const Notification = () => {
  return (
    <div className="w-full py-4 px-8 cool-gradient font-RobotoMono text-sm uppercase">
      <div className="flex items-center justify-between sm:justify-center space-x-2 sm:space-x-4">
        <span className="hidden sm:flex">Learn more about erc wizard:</span>
        <a href={ercWizardDocsHref} className="flex items-center justify-center underline">
          Documentation
          <ArrowUpRightIcon className="w-3 h-3 ml-1" />
        </a>
        <a
          href={`https://polygonscan.com/address/${factoryAddresses[SupportedChainId.POLYGON]}`}
          className="flex items-center justify-center underline"
        >
          verified contract
          <ArrowUpRightIcon className="w-3 h-3 ml-1" />
        </a>
      </div>
    </div>
  )
}

export default Notification
