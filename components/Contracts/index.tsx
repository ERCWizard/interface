import { useAccount, useNetwork, useContractRead } from 'wagmi'
import { useIsMounted } from 'hooks/useIsMounted'
import { storageAddresses } from 'constants/addresses'
import { standardValues } from 'enums/Standard'
import { WizardStorageAbi } from 'abi'
import { contractAbi } from 'constants/contractAbi'
import { useCopyClipboard } from 'hooks/useCopyClipboard'
import { ArrowUpRightIcon } from '@heroicons/react/20/solid'
import PageTitle from 'components/PageTitle'
import { tierValues } from 'enums/Tier'

const Contracts = () => {
  const { copy } = useCopyClipboard()
  const isMounted = useIsMounted()
  const { chain } = useNetwork()
  const { address } = useAccount()
  const { data, isLoading } = useContractRead({
    addressOrName: chain?.id && storageAddresses[chain.id] ? storageAddresses[chain.id] : '',
    contractInterface: WizardStorageAbi,
    functionName: 'getCreatedContracts',
    args: address,
    onError(error) {
      console.log('Error', error)
    },
    onSuccess() {
      console.log('Success')
    },
  })

  return (
    <section className="min-h-[calc(100vh-261px)] max-w-[1280px] mx-auto flex flex-col">
      <PageTitle title="explore deployed contracts" description="Contracts" />
      <div className="overflow-x-auto">
        <table className="w-full text-left border-separate border-spacing-[1px]">
          <thead className="uppercase bg-neutral-900 text-neutral-400 border-b border-neutral-800">
            <tr className="h-16">
              <th scope="col" className="px-4 font-normal w-24">
                type
              </th>
              <th scope="col" className="px-4 font-normal whitespace-nowrap">
                contract address
              </th>
              <th scope="col" className="px-4 font-normal w-28 text-center">
                tier
              </th>
              <th scope="col" className="px-4 font-normal w-28 text-center">
                abi
              </th>
              <th scope="col" className="px-4 font-normal w-20 text-center">
                write
              </th>
            </tr>
          </thead>
          <tbody>
            {isMounted && isLoading ? (
              <>
                {Array.from({ length: 6 }, (_, i) => (
                  <tr className="h-16 whitespace-nowrap bg-neutral-900/70" key={i + 'tr'}>
                    {Array.from({ length: 5 }, (_, i) => (
                      <td className="px-4" key={i}>
                        <div className="w-full h-4 bg-neutral-800 animate-pulse" />
                      </td>
                    ))}
                  </tr>
                ))}
              </>
            ) : (
              isMounted &&
              data?.map((contract) => (
                <tr
                  key={contract.address_}
                  className="h-16 whitespace-nowrap bg-neutral-900 hover:bg-neutral-800 ease-in duration-150"
                >
                  <td className="px-4 uppercase">{standardValues[contract.standard]}</td>
                  <td className="px-4 w-full">
                    <a
                      href={`${chain?.blockExplorers?.etherscan?.url}/address/${contract.address_}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-neutral-400 hover:text-white ease-in duration-150"
                    >
                      {contract.address_}
                      <ArrowUpRightIcon className="h-5 w-5" />
                    </a>
                  </td>
                  <td>
                    <span className="flex items-center justify-center text-neutral-400 py-1 px-2 w-24 uppercase">
                      {tierValues[contract.tier]}
                    </span>
                  </td>
                  <td className="px-4 uppercase text-center">
                    <button
                      data-value="copy abi to clipboard"
                      onClick={() => copy(contractAbi[standardValues[contract.standard]][contract.tier])}
                      className="text-neutral-400 hover:text-white ease-in duration-150 uppercase copy-tooltip"
                    >
                      copy
                    </button>
                  </td>
                  <td className="px-4 uppercase text-center">
                    <a
                      href={`${chain?.blockExplorers?.etherscan?.url}/address/${contract.address_}#writeContract`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="block explorer"
                      className="flex items-center justify-center text-neutral-400 hover:text-white ease-in duration-150 uppercase"
                    >
                      <ArrowUpRightIcon className="h-5 w-5" />
                    </a>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-center uppercase text-neutral-400 mt-4 w-full">
        <span className="text-xs sm:text-base">
          {isMounted && !isLoading && data?.length === 0
            ? "Couldn't find any contracts matching your address"
            : isMounted && !isLoading && data === undefined && 'connect wallet'}
        </span>
      </div>
    </section>
  )
}

export default Contracts
