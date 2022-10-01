import { useAccount, useNetwork, useContractRead } from 'wagmi'
import { useIsMounted } from 'hooks/useIsMounted'
import { factoryAddresses } from 'constants/addresses'
import { formatContractType } from 'utils/formatContractType'
import { WizardFactoryAbi } from 'abi'
import { contractAbi } from 'constants/contractAbi'
import { useCopyClipboard } from 'hooks/useCopyClipboard'
import { ArrowUpRightIcon, InformationCircleIcon } from '@heroicons/react/20/solid'
import PageTitle from 'components/PageTitle'

const style = {
  wrapper: `min-h-[calc(100vh-128px)] max-w-[1280px] mx-auto flex flex-col`,
  description: `text-neutral-400 text-xs uppercase my-4`,
  table: `w-full text-left border-separate border-spacing-[1px]`,
  thead: `uppercase bg-neutral-900 text-neutral-400 border-b border-neutral-800`,
  contract: `h-16 whitespace-nowrap bg-neutral-900 hover:bg-neutral-800 ease-in duration-150`,
  contractCopy: `text-neutral-400 hover:text-white ease-in duration-150 uppercase`,
  contractWrite: `flex items-center justify-center text-neutral-400 hover:text-white ease-in duration-150 uppercase`,
  contractAddress: `flex items-center text-neutral-400 hover:text-white ease-in duration-150`,
  contractSkeleton: `h-16 whitespace-nowrap bg-neutral-900/70`,
  skeleton: `w-full h-4 bg-neutral-800 animate-pulse`,
}

const Contracts = () => {
  const { copy } = useCopyClipboard()
  const isMounted = useIsMounted()
  const { chain } = useNetwork()
  const { address } = useAccount()
  const { data, isLoading } = useContractRead({
    addressOrName: chain?.id && factoryAddresses[chain.id] ? factoryAddresses[chain.id] : '',
    contractInterface: WizardFactoryAbi,
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
    <section className={style.wrapper}>
      <PageTitle title="explore deployed contracts" description="Contracts" />
      <div className="overflow-x-auto">
        <table className={style.table}>
          <thead className={style.thead}>
            <tr className="h-16">
              <th scope="col" className="px-4 font-normal w-24">
                type
              </th>
              <th scope="col" className="px-4 font-normal whitespace-nowrap">
                contract address
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
            {isMounted && !isLoading ? (
              data?.map((contract) => (
                <tr key={contract._address} className={style.contract}>
                  <td className="px-4 uppercase">{formatContractType(contract._type)}</td>
                  <td className="px-4 w-full">
                    <a
                      href={`${chain?.blockExplorers?.etherscan?.url}/address/${contract._address}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={style.contractAddress}
                    >
                      {contract._address}
                      <ArrowUpRightIcon className="h-5 w-5" />
                    </a>
                  </td>
                  <td className="px-4 uppercase text-center">
                    <button
                      data-value="copy abi to clipboard"
                      onClick={() => copy(contractAbi[formatContractType(contract._type)])}
                      className={`${style.contractCopy} copy-tooltip`}
                    >
                      copy
                    </button>
                  </td>
                  <td className="px-4 uppercase text-center">
                    <a
                      href={`${chain?.blockExplorers?.etherscan?.url}/address/${contract._address}#writeContract`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={style.contractWrite}
                    >
                      <ArrowUpRightIcon className="h-5 w-5" />
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <>
                {Array.from({ length: 6 }, (_, i) => (
                  <tr className={style.contractSkeleton} key={i + 'tr'}>
                    {Array.from({ length: 4 }, (_, i) => (
                      <td className="px-4" key={i}>
                        <div className={style.skeleton} />
                      </td>
                    ))}
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>
      {isMounted && !isLoading && data?.length === 0 && (
        <div className="flex items-center justify-center uppercase text-neutral-400 p-4 w-full">
          <span className="w-5 h-5 mr-4">
            <InformationCircleIcon className="w-5 h-5 mr-4" />
          </span>
          <span className="text-sm sm:text-base">Couldn&apos;t find any contracts matching your address</span>
        </div>
      )}
    </section>
  )
}

export default Contracts
