import { useAccount, useNetwork, useContractRead } from 'wagmi'
import { useIsMounted } from 'hooks/useIsMounted'
import { factoryAddresses } from 'constants/addresses'
import { formatContractType } from 'utils/formatContractType'
import WizardFactoryAbi from 'abi/WizardFactory.json'
import PageTitle from 'components/PageTitle'

const style = {
  wrapper: `min-h-[calc(100vh-128px)] max-w-[1280px] mx-auto flex flex-col`,
  description: `text-neutral-400 text-xs uppercase my-4`,
  table: `w-full text-left border-separate border-spacing-[1px]`,
  thead: `uppercase bg-neutral-800 text-neutral-400 border-b border-neutral-800`,
  contract: `h-16 whitespace-nowrap bg-neutral-900 hover:bg-neutral-800 ease-in duration-150`,
  contractAddress: `text-neutral-400 hover:text-white ease-in duration-150`,
  contractSkeleton: `h-16 whitespace-nowrap bg-neutral-900`,
  skeleton: `w-full h-4 bg-neutral-800 animate-pulse`,
}

const Contracts = () => {
  const isMounted = useIsMounted()
  const { chain } = useNetwork()
  const { address } = useAccount()
  const { data, isLoading } = useContractRead({
    addressOrName: chain?.id ? factoryAddresses[chain.id] : '',
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
      <PageTitle title="explore deployed contracts" />
      <p className={style.description}>Contracts</p>
      <div className="overflow-x-auto">
        <table className={style.table}>
          <thead className={style.thead}>
            <tr className="h-16">
              <th scope="col" className="px-4 font-normal w-24">
                type
              </th>
              <th scope="col" className="px-4 font-normal">
                contract address
              </th>
              <th scope="col" className="px-4 font-normal w-28">
                interact
              </th>
            </tr>
          </thead>
          <tbody>
            {isMounted && !isLoading ? (
              data?.map((contract) => (
                <tr key={contract._address} className={style.contract}>
                  <td className="px-4 uppercase">
                    {formatContractType(contract._type)}
                  </td>
                  <td className="px-4 w-full">
                    <a
                      href={`${chain?.blockExplorers?.etherscan?.url}/address/${contract._address}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={style.contractAddress}
                    >
                      {contract._address} ↗
                    </a>
                  </td>
                  <td className="px-4 uppercase">
                    <a
                      href={`${chain?.blockExplorers?.etherscan?.url}/address/${contract._address}#writeContract`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={style.contractAddress}
                    >
                      write
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr className={style.contractSkeleton}>
                <td className="px-4 uppercase">
                  <div className={style.skeleton} />
                </td>
                <td className="px-4">
                  <div className={style.skeleton} />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Contracts
